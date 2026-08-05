---
order: 2
title: Removing Redundant Work from a High-Volume Processing Path
eyebrow: Performance · Production
outcome: ~77% lower runtime
summary: I investigated why a high-volume processing path was slower than expected and traced the cost to sorted pagination. The underlying database access already provided the ordering this path needed, so after validating equivalent output I switched it to regular pagination, rolled the change out through a canary, and saw average runtime fall from ~0.65s to ~0.15s.
homepageSummary: A high-volume processing path was using sorted pagination even though its database access already provided the ordering it needed. I traced the extra work, moved the path to regular pagination after validating equivalent output, and saw average production runtime drop from ~0.65s to ~0.15s.
status: Shipped to production
published: true
---

This case study is being prepared for publication.
