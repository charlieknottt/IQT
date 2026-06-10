# IQT Portfolio Explorer

An interactive dashboard that helps government partners discover AI solutions from IQT portfolio companies they may not know exist.

Government mission owners rarely browse venture portfolios by company name. This explorer inverts the search: start from the mission, end at the companies. A four-stage flow walks from mission area (defense, homeland security, intelligence, and others) to AI capability type, to the specific function needed, and finally to the matched portfolio companies, each with government use cases and deployment context.

## How it works

- **Stage 1, Mission area**: pick the operational domain
- **Stage 2, AI capability**: computer vision, NLP, autonomy, decision support, and more
- **Stage 3, Function**: the concrete task, like object detection or document triage
- **Stage 4, Companies**: matched portfolio companies with modal detail views

Company modals include government-relevant deployment context: air-gapped readiness, cloud versus on-premise options, edge deployment, classification levels supported, and FedRAMP status. A sidebar benchmarking card summarizes the state of the art for each selected function, and example applications update with every selection.

## Stack

Vanilla JavaScript, HTML, and CSS. No frameworks, no build step. The taxonomy and company database (100+ companies mapped across missions, capabilities, and functions) live in `data.js`.

## Running it

Open `index.html` in a browser. That's it. The progress bar is clickable for jumping between stages, and back navigation preserves prior selections.
