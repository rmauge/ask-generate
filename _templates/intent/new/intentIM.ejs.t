---
inject: true
to: skill-package/interactionModels/custom/en-US.json
after: '"intents": \['
skip_if: <%= Name %>Intent
---
        {
          "name": "<%= Name %>Intent",
          "slots": [],
          "samples": [
            "<%= name %> sample"
          ]
        },