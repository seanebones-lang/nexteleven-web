---
template: doc
theme: blueprint
title: Inside EvidenceLens
subtitle: Build evidence packets for bounded review.
---
Build evidence packets for bounded review.

## A The main path

```flow LR
Source adapters -> Preserved source snapshot
Preserved source snapshot -> Evidence packet
Evidence packet -> Deterministic checks
Deterministic checks -> Review queue
Review queue -> Human reviewer
```

## B How the parts work

Packets retain source identity, snapshots and exact spans. The research build studies reproducible checks and explicit review conditions.

## C What to keep in mind

A queue result is not verification of a scientific claim. Experimental semantic findings remain subject to evaluation.

This diagram explains the implementation concept. It is not live system telemetry.
