// IQT AI Portfolio - Production-Ready Wizard Flow Application

// State
let currentStage = 1;
let selections = {
    mission: null,
    capability: null,
    function: null
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderStage1();
});

// ==================
// LANDING PAGE
// ==================

let landingScrolled = false;

function startExplorer() {
    if (landingScrolled) return;
    landingScrolled = true;

    const landing = document.getElementById('landing');
    landing.classList.add('fade-out');

    // Wait for fade animation, then show main content
    setTimeout(() => {
        landing.classList.remove('active');
        landing.classList.remove('fade-out');

        // Show progress bar and stage 1
        document.getElementById('progress-bar').style.display = 'flex';
        document.getElementById('stage-1').classList.add('active');

        updateProgressBar();
    }, 500);
}

// Handle scroll on landing page
document.addEventListener('wheel', (e) => {
    const landing = document.getElementById('landing');
    if (landing.classList.contains('active') && e.deltaY > 0) {
        startExplorer();
    }
}, { passive: true });

// Handle touch scroll on landing page
let touchStartY = 0;
document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchmove', (e) => {
    const landing = document.getElementById('landing');
    if (landing.classList.contains('active')) {
        const touchY = e.touches[0].clientY;
        if (touchStartY - touchY > 50) {
            startExplorer();
        }
    }
}, { passive: true });

// ==================
// NAVIGATION
// ==================

function navigateToStep(step) {
    // Only allow navigation to completed steps or current step
    if (step > currentStage) return;
    if (step === currentStage) return;

    // Clear selections for steps after the target step
    if (step <= 1) {
        selections.mission = null;
        selections.capability = null;
        selections.function = null;
    } else if (step <= 2) {
        selections.capability = null;
        selections.function = null;
    } else if (step <= 3) {
        selections.function = null;
    }

    goToStage(step);

    // Re-render the appropriate stage
    switch (step) {
        case 1:
            renderStage1();
            break;
        case 2:
            renderStage2();
            break;
        case 3:
            renderStage3();
            break;
        case 4:
            renderStage4();
            break;
    }
}

function goToStage(stage) {
    currentStage = stage;
    updateProgressBar();

    // Show/hide back button
    const backBtn = document.getElementById('back-btn');
    if (stage > 1) {
        backBtn.style.display = 'flex';
    } else {
        backBtn.style.display = 'none';
    }

    // Show/hide quick nav
    document.getElementById('quick-nav').style.display = stage > 1 ? 'block' : 'none';

    // Switch stages
    document.querySelectorAll('.stage').forEach(s => s.classList.remove('active'));
    document.getElementById(`stage-${stage}`).classList.add('active');
}

function updateProgressBar() {
    // Update step states
    document.querySelectorAll('.progress-step').forEach((step, i) => {
        const stepNum = i + 1;
        step.classList.remove('active', 'completed', 'clickable');

        if (stepNum < currentStage) {
            step.classList.add('completed', 'clickable');
        } else if (stepNum === currentStage) {
            step.classList.add('active');
            if (stepNum > 1) {
                step.classList.add('clickable');
            }
        }
    });

    // Update progress lines
    document.querySelectorAll('.progress-line').forEach((line, i) => {
        const lineNum = i + 1;
        if (lineNum < currentStage) {
            line.classList.add('completed');
        } else {
            line.classList.remove('completed');
        }
    });
}

function goBack() {
    if (currentStage > 1) {
        navigateToStep(currentStage - 1);
    }
}

function goToLanding() {
    selections = { mission: null, capability: null, function: null };
    landingScrolled = false;

    // Hide everything and show landing
    document.querySelectorAll('.stage').forEach(s => s.classList.remove('active'));
    document.getElementById('progress-bar').style.display = 'none';
    document.getElementById('quick-nav').style.display = 'none';
    document.getElementById('back-btn').style.display = 'none';
    document.getElementById('landing').classList.add('active');

    currentStage = 1;
    renderStage1();
}

// ==================
// STAGE 1: MISSIONS
// ==================

function renderStage1() {
    const container = document.getElementById('mission-options');
    container.innerHTML = '';

    // Get missions sorted by company count
    const missionData = Object.entries(MISSION_AREAS)
        .map(([key, mission]) => ({
            key,
            mission,
            count: COMPANIES.filter(c => c.missionAreas.includes(key)).length
        }))
        .filter(m => m.count > 0)
        .sort((a, b) => b.count - a.count);

    missionData.forEach(({ key, mission, count }, index) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.onclick = () => selectMission(key);
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Select ${mission.name} mission area`);

        // Add keyboard support
        card.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectMission(key);
            }
        };

        card.innerHTML = `
            <span class="badge">${count} companies</span>
            <div class="tag">${mission.shortName}</div>
            <h3>${mission.name}</h3>
            <p>${mission.description}</p>
            <div class="meta">
                ${mission.agencies.slice(0, 3).map(a => `<span class="meta-tag">${a}</span>`).join('')}
                ${mission.agencies.length > 3 ? `<span class="meta-tag">+${mission.agencies.length - 3}</span>` : ''}
            </div>
        `;

        // Stagger animation
        card.style.animationDelay = `${index * 0.05}s`;
        container.appendChild(card);
    });
}

function selectMission(missionKey) {
    selections.mission = missionKey;
    goToStage(2);
    renderStage2();
}

// ==================
// STAGE 2: CAPABILITIES
// ==================

function renderStage2() {
    const mission = MISSION_AREAS[selections.mission];
    const companies = COMPANIES.filter(c => c.missionAreas.includes(selections.mission));

    // Update context badge
    document.getElementById('selected-mission-badge').textContent = mission.name;

    // Get capabilities for this mission
    const capCounts = {};
    companies.forEach(c => {
        c.capabilities.forEach(cap => {
            capCounts[cap] = (capCounts[cap] || 0) + 1;
        });
    });

    const container = document.getElementById('capability-options');
    container.innerHTML = '';

    Object.entries(capCounts)
        .sort((a, b) => b[1] - a[1])
        .forEach(([capKey, count], index) => {
            const cap = AI_CAPABILITIES[capKey];
            if (!cap) return;

            // Get relevant subcapabilities
            const subcaps = new Set();
            companies.filter(c => c.capabilities.includes(capKey))
                .forEach(c => c.subcapabilities.forEach(s => subcaps.add(s)));

            const card = document.createElement('div');
            card.className = 'option-card';
            card.onclick = () => selectCapability(capKey);
            card.tabIndex = 0;
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `Select ${cap.name} capability`);

            card.onkeydown = (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectCapability(capKey);
                }
            };

            card.innerHTML = `
                <span class="badge">${count} companies</span>
                <h3>${cap.name}</h3>
                <p>${cap.description}</p>
                <div class="meta">
                    ${Array.from(subcaps).slice(0, 4).map(s => `<span class="meta-tag">${s}</span>`).join('')}
                    ${subcaps.size > 4 ? `<span class="meta-tag">+${subcaps.size - 4}</span>` : ''}
                </div>
            `;

            card.style.animationDelay = `${index * 0.05}s`;
            container.appendChild(card);
        });
}

function selectCapability(capKey) {
    selections.capability = capKey;
    goToStage(3);
    renderStage3();
}

// ==================
// STAGE 3: FUNCTIONS
// ==================

function renderStage3() {
    const cap = AI_CAPABILITIES[selections.capability];
    const mission = MISSION_AREAS[selections.mission];

    // Get companies matching mission + capability
    const companies = COMPANIES.filter(c =>
        c.missionAreas.includes(selections.mission) &&
        c.capabilities.includes(selections.capability)
    );

    // Update context badge
    document.getElementById('selected-capability-badge').textContent = `${mission.shortName} → ${cap.name}`;

    // Get function counts
    const funcCounts = {};
    companies.forEach(c => {
        c.subcapabilities.forEach(sub => {
            // Only count subcapabilities that belong to this capability
            if (cap.subcategories.includes(sub) || isRelatedSubcap(sub, selections.capability)) {
                funcCounts[sub] = funcCounts[sub] || { count: 0, companies: [] };
                funcCounts[sub].count++;
                funcCounts[sub].companies.push(c);
            }
        });
    });

    // Also add capability's standard subcategories that have companies
    cap.subcategories.forEach(sub => {
        if (!funcCounts[sub]) {
            const matchingCompanies = companies.filter(c => c.subcapabilities.includes(sub));
            if (matchingCompanies.length > 0) {
                funcCounts[sub] = { count: matchingCompanies.length, companies: matchingCompanies };
            }
        }
    });

    const container = document.getElementById('function-options');
    container.innerHTML = '';

    // Add "All Functions" option
    const allCard = document.createElement('div');
    allCard.className = 'function-card';
    allCard.onclick = () => selectFunction('__all__');
    allCard.tabIndex = 0;
    allCard.setAttribute('role', 'button');
    allCard.setAttribute('aria-label', 'View all functions');

    allCard.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectFunction('__all__');
        }
    };

    allCard.innerHTML = `
        <h3>View All</h3>
        <p class="count"><strong>${companies.length}</strong> companies</p>
    `;
    container.appendChild(allCard);

    // Add specific functions
    Object.entries(funcCounts)
        .sort((a, b) => b[1].count - a[1].count)
        .forEach(([func, data], index) => {
            const card = document.createElement('div');
            card.className = 'function-card';
            card.onclick = () => selectFunction(func);
            card.tabIndex = 0;
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `Select ${func}`);

            card.onkeydown = (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectFunction(func);
                }
            };

            // Truncate long function names
            const displayName = func.length > 24 ? func.substring(0, 21) + '...' : func;

            card.innerHTML = `
                <h3 title="${func}">${displayName}</h3>
                <p class="count"><strong>${data.count}</strong> companies</p>
            `;

            card.style.animationDelay = `${(index + 1) * 0.03}s`;
            container.appendChild(card);
        });
}

function isRelatedSubcap(subcap, capKey) {
    // Check if a subcapability is related to a capability
    const cap = AI_CAPABILITIES[capKey];
    if (!cap) return false;

    const subcapLower = subcap.toLowerCase();
    return cap.subcategories.some(s => s.toLowerCase() === subcapLower);
}

function selectFunction(func) {
    selections.function = func;
    goToStage(4);
    renderStage4();
}

// ==================
// STAGE 4: SOLUTIONS
// ==================

function renderStage4() {
    const mission = MISSION_AREAS[selections.mission];
    const cap = AI_CAPABILITIES[selections.capability];

    // Build selection path
    const pathEl = document.getElementById('selection-path');
    pathEl.innerHTML = `
        <span class="path-item">${mission.name}</span>
        <span class="path-separator">→</span>
        <span class="path-item">${cap.name}</span>
        <span class="path-separator">→</span>
        <span class="path-item">${selections.function === '__all__' ? 'All Functions' : selections.function}</span>
    `;

    // Update title
    const title = selections.function === '__all__'
        ? `${cap.name} Solutions for ${mission.shortName}`
        : `${selections.function} Solutions`;
    document.getElementById('solutions-title').textContent = title;

    // Render benchmarks
    renderBenchmarks();

    // Render use cases
    renderUseCases();

    // Render solutions
    renderSolutions();
}

function renderBenchmarks() {
    const cap = AI_CAPABILITIES[selections.capability];
    const container = document.getElementById('benchmark-content');

    if (!cap.benchmarks || cap.benchmarks.length === 0) {
        document.getElementById('benchmark-card').style.display = 'none';
        return;
    }

    document.getElementById('benchmark-card').style.display = 'block';
    container.innerHTML = cap.benchmarks.map(b => `
        <div class="benchmark-item">
            <div class="label">${b.metric}</div>
            <div class="value">${b.stateOfArt}</div>
            <div class="note">${b.considerations}</div>
        </div>
    `).join('');
}

function renderUseCases() {
    const cap = AI_CAPABILITIES[selections.capability];
    const container = document.getElementById('use-cases-list');

    container.innerHTML = cap.govUseCases.map(uc => `<li>${uc}</li>`).join('');
}

function renderSolutions() {
    // Get matching companies
    let companies = COMPANIES.filter(c =>
        c.missionAreas.includes(selections.mission) &&
        c.capabilities.includes(selections.capability)
    );

    // Filter by specific function if selected
    if (selections.function !== '__all__') {
        companies = companies.filter(c => c.subcapabilities.includes(selections.function));
    }

    // Update count
    document.getElementById('solutions-count').textContent = `${companies.length} companies`;

    // Sort alphabetically
    companies.sort((a, b) => a.name.localeCompare(b.name));

    // Render
    const container = document.getElementById('solutions-grid');
    container.innerHTML = '';

    companies.forEach((company, index) => {
        const card = document.createElement('div');
        card.className = 'solution-card';
        card.onclick = () => showCompanyModal(company);
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View details for ${company.name}`);

        card.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                showCompanyModal(company);
            }
        };

        // Highlight the selected function in tags
        const funcTags = company.subcapabilities.slice(0, 4).map(f => {
            const isHighlight = selections.function !== '__all__' && f === selections.function;
            return `<span class="func-tag ${isHighlight ? 'highlight' : ''}">${f}</span>`;
        }).join('');

        const websiteLink = company.website
            ? `<a href="${company.website}" target="_blank" rel="noopener noreferrer" class="company-link" onclick="event.stopPropagation();">Visit Website →</a>`
            : '';

        card.innerHTML = `
            <div class="solution-card-header">
                <div class="solution-card-title">
                    <h4>${company.name}</h4>
                    <span class="solution-category">${company.iqtCategory}</span>
                </div>
            </div>
            <p class="description">${company.description}</p>
            <div class="card-footer">
                <div class="functions">
                    ${funcTags}
                    ${company.subcapabilities.length > 4 ? `<span class="func-tag">+${company.subcapabilities.length - 4}</span>` : ''}
                </div>
                ${websiteLink}
            </div>
        `;

        card.style.animationDelay = `${index * 0.02}s`;
        container.appendChild(card);
    });
}

// ==================
// COMPANY MODAL
// ==================

function showCompanyModal(company) {
    document.getElementById('modal-company-name').textContent = company.name;
    document.getElementById('modal-category').textContent = company.iqtCategory;

    document.getElementById('modal-description').textContent = company.description;

    // Website link
    const websiteContainer = document.getElementById('modal-website');
    if (company.website) {
        const cleanUrl = company.website.replace('https://', '').replace('www.', '').replace(/\/$/, '');
        websiteContainer.innerHTML = `<a href="${company.website}" target="_blank" rel="noopener noreferrer" class="modal-website-link">${cleanUrl} →</a>`;
        websiteContainer.style.display = 'block';
    } else {
        websiteContainer.style.display = 'none';
    }

    // Capabilities
    document.getElementById('modal-capabilities').innerHTML =
        company.capabilities.map(c => `<span class="modal-tag">${AI_CAPABILITIES[c]?.name || c}</span>`).join('');

    // Subcapabilities
    document.getElementById('modal-subcapabilities').innerHTML =
        company.subcapabilities.map(s => `<span class="modal-tag">${s}</span>`).join('');

    // Government Use Cases
    const useCasesSection = document.getElementById('modal-use-cases-section');
    const useCasesContainer = document.getElementById('modal-use-cases');
    if (company.useCases && company.useCases.length > 0) {
        useCasesSection.style.display = 'block';
        useCasesContainer.innerHTML = company.useCases.map(uc => `
            <li class="use-case-item">${uc.description}</li>
        `).join('');
    } else {
        useCasesSection.style.display = 'none';
    }

    // Deployment Context
    const deploymentSection = document.getElementById('modal-deployment-section');
    const deploymentContainer = document.getElementById('modal-deployment');
    if (company.deploymentContext) {
        deploymentSection.style.display = 'block';
        const dc = company.deploymentContext;
        const deploymentItems = [];

        if (dc.airGapped !== undefined) {
            const statusClass = dc.airGapped === true ? 'supported' : (dc.airGapped === 'partial' ? 'limited' : 'not-supported');
            const label = dc.airGapped === true ? 'Yes' : (dc.airGapped === 'partial' ? 'Limited' : 'No');
            deploymentItems.push(`
                <div class="deployment-item">
                    <span class="deployment-label">Air-Gapped:</span>
                    <span class="deployment-status ${statusClass}">${label}</span>
                </div>
            `);
        }

        if (dc.cloudNative !== undefined) {
            const statusClass = dc.cloudNative === true ? 'supported' : (dc.cloudNative === 'partial' ? 'limited' : 'not-supported');
            const label = dc.cloudNative === true ? 'Yes' : (dc.cloudNative === 'partial' ? 'Limited' : 'No');
            deploymentItems.push(`
                <div class="deployment-item">
                    <span class="deployment-label">Cloud:</span>
                    <span class="deployment-status ${statusClass}">${label}</span>
                </div>
            `);
        }

        if (dc.onPremise !== undefined) {
            const statusClass = dc.onPremise === true ? 'supported' : (dc.onPremise === 'partial' ? 'limited' : 'not-supported');
            const label = dc.onPremise === true ? 'Yes' : (dc.onPremise === 'partial' ? 'Limited' : 'No');
            deploymentItems.push(`
                <div class="deployment-item">
                    <span class="deployment-label">On-Premise:</span>
                    <span class="deployment-status ${statusClass}">${label}</span>
                </div>
            `);
        }

        if (dc.edgeDeployment !== undefined) {
            const statusClass = dc.edgeDeployment === true ? 'supported' : (dc.edgeDeployment === 'partial' ? 'limited' : 'not-supported');
            const label = dc.edgeDeployment === true ? 'Yes' : (dc.edgeDeployment === 'partial' ? 'Limited' : 'No');
            deploymentItems.push(`
                <div class="deployment-item">
                    <span class="deployment-label">Edge:</span>
                    <span class="deployment-status ${statusClass}">${label}</span>
                </div>
            `);
        }

        if (dc.classification) {
            deploymentItems.push(`
                <div class="deployment-item">
                    <span class="deployment-label">Classification:</span>
                    <span class="deployment-value">${dc.classification}</span>
                </div>
            `);
        }

        if (dc.fedRAMP) {
            deploymentItems.push(`
                <div class="deployment-item">
                    <span class="deployment-label">FedRAMP:</span>
                    <span class="deployment-value">${dc.fedRAMP}</span>
                </div>
            `);
        }

        deploymentContainer.innerHTML = deploymentItems.join('');
    } else {
        deploymentSection.style.display = 'none';
    }

    // Missions
    document.getElementById('modal-missions').innerHTML =
        company.missionAreas.map(m => {
            const mission = MISSION_AREAS[m];
            if (!mission) return '';
            return `
                <div class="modal-mission" onclick="event.stopPropagation(); closeModal(); jumpToMission('${m}');" tabindex="0" role="button">
                    <span class="name">${mission.name}</span>
                    <span class="agencies">${mission.agencies.slice(0, 3).join(', ')}${mission.agencies.length > 3 ? '...' : ''}</span>
                </div>
            `;
        }).join('');

    document.getElementById('company-modal').classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus trap for accessibility
    const modalContent = document.querySelector('.modal-content');
    modalContent.focus();
}

function closeModal() {
    document.getElementById('company-modal').classList.remove('active');
    document.body.style.overflow = '';
}

function jumpToMission(missionKey) {
    selections = { mission: null, capability: null, function: null };
    goToStage(1);
    setTimeout(() => selectMission(missionKey), 100);
}

// ==================
// KEYBOARD NAVIGATION
// ==================

document.addEventListener('keydown', (e) => {
    // Close modal on escape
    if (e.key === 'Escape') {
        const modal = document.getElementById('company-modal');
        if (modal.classList.contains('active')) {
            closeModal();
        }
    }

    // Navigate back on backspace (when not in input)
    if (e.key === 'Backspace' && !e.target.matches('input, textarea')) {
        const modal = document.getElementById('company-modal');
        if (!modal.classList.contains('active') && currentStage > 1) {
            e.preventDefault();
            goBack();
        }
    }
});

// Prevent scroll when modal is open
document.getElementById('company-modal').addEventListener('wheel', (e) => {
    const modalContent = document.querySelector('.modal-content');
    const scrollTop = modalContent.scrollTop;
    const scrollHeight = modalContent.scrollHeight;
    const height = modalContent.clientHeight;
    const delta = e.deltaY;

    if ((scrollTop === 0 && delta < 0) || (scrollTop + height >= scrollHeight && delta > 0)) {
        e.preventDefault();
    }
}, { passive: false });
