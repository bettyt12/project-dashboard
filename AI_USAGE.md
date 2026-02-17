# AI Usage Disclosure

I used **ChatGPT** at the start for the overall project breakdown (structure, order of work, what to commit). For the code I used **Cursor** in places: Project type and mock data, the filter function in `lib/`, and the detail page.I worked on Folder layout, client vs server boundaries, Filters and ProjectsWithFilters, navigation, and most of the styling.
 
**What I modified or decided**
- Filter never mutates; detail page resolves project by id from the URL; only interactive pieces are client components.
- Status as dropdown, search first, smaller search box; two distinct empty-state messages; defensive "—" for missing/optional fields.
- Kept body full-page; Back link goes to `/`. With mock data only there’s no async fetch, so I didn’t add a loading state.

**What I could have done**
- Filters in URL; detail as side panel; multi-select status; unit tests for `filterProjects`. Skipped to keep scope small.

**What I don’t fully agree with**
- Early suggestions were too abstract—I asked for concrete file names and commit order. I kept filter state in `ProjectsWithFilters` instead of a custom hook/context, and left `formatDate` in-components instead of a shared util.

