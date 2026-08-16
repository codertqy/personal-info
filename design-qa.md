# Design QA

## Targets and evidence

- Primary visual truth: `D:/Personal-website/deliverables/personal-blog-design-package/assets/01-home-desktop.png` (929 × 1693 px).
- Supporting visual truth: `02-home-mobile.png` (853 × 1844 px), `03-article-desktop.png` (1009 × 1558 px), `04-search-desktop.png` (1487 × 1058 px), and `05-motion-storyboard.png`.
- Desktop implementation: `D:/Personal-website/tmp/qa/qa-home-1440.png` (1425 × 990 px browser client area from a 1440 × 1000 CSS viewport, device density 1).
- Mobile implementation: `D:/Personal-website/tmp/qa/final-home-390.png` (375 × 812 px browser client area from a 390 × 844 CSS viewport, device density 1).
- Search implementation: `D:/Personal-website/tmp/qa/qa-search-1440.png` (1440 × 1000 px; modal removes the page scrollbar).
- Article implementation: `D:/Personal-website/tmp/qa/article-1440.png` (1425 × 1000 px browser client area).
- Combined comparisons: `tmp/qa/qa-compare-home.jpg`, `tmp/qa/compare-home-mobile.jpg`, `tmp/qa/qa-compare-search.jpg`, and `tmp/qa/qa-compare-article.jpg`.
- Normalization: each source image was top-aligned and fitted to the implementation capture dimensions with Lanczos resampling before side-by-side review. Browser chrome was excluded; scrollbar width was recorded rather than treated as layout drift.
- State: light theme, initial/top-of-page state; search comparison uses query “设计” with three results.

## Full-view and focused comparison

- Home desktop: the warm paper surface, single-rule header, centered four-item navigation, serif-led 55:45 hero, vertical motto, editorial still-life crop, terracotta accents, and unboxed section structure match the source system. The final desktop pass increased hero image height and vertical rhythm to align the primary composition.
- Home mobile: the compact header, two-line hero title, vertical motto, full-width 4:3 image, and row-style article archive match the mobile reference. The 320 px and 390 px captures have no horizontal overflow or text clipping.
- Search: paper-like rectangular panel, restrained overlay, thin terracotta input border, three line-based results, focus placement, and close affordance match the reference. The browser-native duplicate search cancel control was removed.
- Article: title hierarchy, wide editorial cover, 720 px prose measure, serif body, sticky TOC, code treatment, and warm neutral palette are consistent with the article reference. The prototype’s visible percentage label was intentionally omitted because the written specification requires a non-numeric 2–3 px progress bar.
- Required fidelity surfaces: typography uses the specified Source Han/Noto/Song fallback stack and 700 display weight; spacing follows the 4 px scale; colors use the documented tokens; all visible photography is independent generated raster imagery with matching natural-light art direction; Chinese copy and metadata match the content model.

## Comparison history

1. Initial responsive pass found a P2 mobile hero that was too tall. Fixed the mobile header/padding rhythm and changed the image to a 4:3 full-width crop; the revised 390/320 captures align with the source and reveal the article archive within the first viewport.
2. Initial interaction pass found P2 Escape handling gaps in the mobile menu and search dialog. Added explicit keyboard handlers and verified that both dialogs close and release scroll lock.
3. Initial article pass found a P2 encoded-anchor mismatch that prevented TOC current-section styling. Normalized hash comparison and verified the current heading in both desktop and mobile TOCs.
4. Initial search comparison found a P2 duplicate browser cancel icon. Disabled the native cancel affordance and retained the Phosphor close icon.
5. Initial desktop comparison found a P2 hero proportion mismatch and a flat background. Increased the desktop hero/image height and added a low-contrast generated paper texture; the post-fix comparison has no remaining P0/P1/P2 mismatch.

## Browser and interaction verification

- Checked widths: 1440, 1024, 768, 390, and 320 px; all reported zero horizontal overflow.
- Tested navigation, article filtering, `/` search shortcut, 120 ms local search debounce, arrow selection, Enter navigation, Escape close, mobile dialog focus/scroll lock, theme toggle persistence, article TOC highlighting, reading progress, and code copy.
- Checked home, articles, article detail, projects, and about routes at desktop and mobile widths.
- Browser console: no errors or warnings after the final route and interaction pass.
- Reduced-motion rules were inspected in the delivered stylesheet: scale and large displacement are removed, delays are cleared, and duration is capped at 80 ms.

## Follow-up polish

- P3: exact Chinese glyph metrics can vary on systems without Source Han Serif SC or Noto Serif SC; the fallback stack preserves hierarchy and measure.
- P3: replace the clearly marked demo identity, social links, article copy, and project record before production deployment.

final result: passed
