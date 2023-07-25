import{_ as e,o as i,c as a,b as t}from"./app-43eb4a4e.js";const r={},n=t('<h1 id="engineering-fundamentals-checklist" tabindex="-1"><a class="header-anchor" href="#engineering-fundamentals-checklist" aria-hidden="true">#</a> Engineering Fundamentals Checklist</h1><p>This checklist is excerpted from Microsoft and is very useful for reference.</p><h2 id="source-control" tabindex="-1"><a class="header-anchor" href="#source-control" aria-hidden="true">#</a> Source Control</h2><ul><li>The default target branch is locked.</li><li>Merges are done through PRs.</li><li>PRs reference related work items.</li><li>Commit history is consistent and commit messages are informative (what, why).</li><li>Consistent branch naming conventions.</li><li>Clear documentation of repository structure.</li><li>Secrets are not part of the commit history or made public. (see Credential scanning)</li><li>Public repositories follow the OSS guidelines, see Required files in default branch for public repositories.</li></ul><h2 id="work-item-tracking" tabindex="-1"><a class="header-anchor" href="#work-item-tracking" aria-hidden="true">#</a> Work Item Tracking</h2><ul><li>All items are tracked in AzDevOps (or similar).</li><li>The board is organized (swim lanes, feature tags, technology tags).</li></ul><h2 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h2><ul><li>Unit tests cover the majority of all components (&gt;90% if possible).</li><li>Integration tests run to test the solution e2e.</li></ul><h2 id="ci-cd" tabindex="-1"><a class="header-anchor" href="#ci-cd" aria-hidden="true">#</a> CI/CD</h2><ul><li>Project runs CI with automated build and test on each PR.</li><li>Project uses CD to manage deployments to a replica environment before PRs are merged.</li><li>Main branch is always shippable.</li></ul><h2 id="security" tabindex="-1"><a class="header-anchor" href="#security" aria-hidden="true">#</a> Security</h2><ul><li>Access is only granted on an as-needed basis</li><li>Secrets are stored in secured locations and not checked in to code</li><li>Data is encrypted in transit (and if necessary at rest) and passwords are hashed</li><li>Is the system split into logical segments with separation of concerns? This helps limiting security vulnerabilities.</li></ul><h2 id="observability" tabindex="-1"><a class="header-anchor" href="#observability" aria-hidden="true">#</a> Observability</h2><ul><li>Significant business and functional events are tracked and related metrics collected.</li><li>Application faults and errors are logged.</li><li>Health of the system is monitored.</li><li>The client and server side observability data can be differentiated.</li><li>Logging configuration can be modified without code changes (eg: verbose mode).</li><li>Incoming tracing context is propagated to allow for production issue debugging purposes.</li><li>GDPR compliance is ensured regarding PII (Personally Identifiable Information).</li></ul><h2 id="agile-scrum" tabindex="-1"><a class="header-anchor" href="#agile-scrum" aria-hidden="true">#</a> Agile/Scrum</h2><ul><li>Process Lead (fixed/rotating) runs the daily standup</li><li>The agile process is clearly defined within team.</li><li>The Dev Lead (+ PO/Others) are responsible for backlog management and refinement.</li><li>A working agreement is established between team members and customer.</li></ul><h2 id="design-reviews" tabindex="-1"><a class="header-anchor" href="#design-reviews" aria-hidden="true">#</a> Design Reviews</h2><ul><li>Process for conducting design reviews is included in the Working Agreement.</li><li>Design reviews for each major component of the solution are carried out and documented, including alternatives.</li><li>Stories and/or PRs link to the design document.</li><li>Each user story includes a task for design review by default, which is assigned or removed during sprint planning.</li><li>Project advisors are invited to design reviews or asked to give feedback to the design decisions captured in documentation.</li><li>Discover all the reviews that the customer&#39;s processes require and plan for them.</li><li>Clear non-functional requirements captured (see Non-Functional Requirements Guidance)</li></ul><h2 id="code-reviews" tabindex="-1"><a class="header-anchor" href="#code-reviews" aria-hidden="true">#</a> Code Reviews</h2><ul><li>There is a clear agreement in the team as to function of code reviews.</li><li>The team has a code review checklist or established process.</li><li>A minimum number of reviewers (usually 2) for a PR merge is enforced by policy.</li><li>Linters/Code Analyzers, unit tests and successful builds for PR merges are set up.</li><li>There is a process to enforce a quick review turnaround.</li></ul><h2 id="retrospectives" tabindex="-1"><a class="header-anchor" href="#retrospectives" aria-hidden="true">#</a> Retrospectives</h2><ul><li>Retrospectives are conducted each week/at the end of each sprint.</li><li>The team identifies 1-3 proposed experiments to try each week/sprint to improve the process.</li><li>Experiments have owners and are added to project backlog.</li><li>The team conducts longer retrospective for Milestones and project completion.</li></ul><h2 id="engineering-feedback" tabindex="-1"><a class="header-anchor" href="#engineering-feedback" aria-hidden="true">#</a> Engineering Feedback</h2><ul><li>The team submits feedback on business and technical blockers that prevent project success</li><li>Suggestions for improvements are incorporated in the solution</li><li>Feedback is detailed and repeatable</li></ul><h2 id="developer-experience-devex" tabindex="-1"><a class="header-anchor" href="#developer-experience-devex" aria-hidden="true">#</a> Developer Experience (DevEx)</h2><p>Developers on the team can:</p><ul><li>Build/Compile source to verify it is free of syntax errors and compiles.</li><li>Execute all automated tests (unit, e2e, etc).</li><li>Start/Launch end-to-end to simulate execution in a deployed environment.</li><li>Attach a debugger to started solution or running automated tests, set breakpoints, step through code, and inspect variables.</li><li>Automatically install dependencies by pressing F5 (or equivalent) in their IDE.</li><li>Use local dev configuration values (i.e. .env, appsettings.development.json).</li></ul>',27),s=[n];function l(o,d){return i(),a("div",null,s)}const h=e(r,[["render",l],["__file","EngineeringFundamentalsChecklist.html.vue"]]);export{h as default};
