---
inject: true
to: skill-package/interactionModels/custom/en-US.json
after: '"intents": \['
skip_if: <%= Name %>Intent
samples: <%= samples %>
---
        {
          "name": "<%= Name %>Intent",
          "slots": [],
          "samples": [
            <%_ if(locals.samples){ -%>
            <%_ samples.split(",").forEach((sample, index, array)  => { -%>
            "<%= sample _%>"<%_ if (index != array.length - 1) { %>,
            <%_ }; _%><% } ); %>
            <% } -%>]
        },