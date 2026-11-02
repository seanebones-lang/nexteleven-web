---
template: doc
theme: blueprint
title: Inside Mothership
subtitle: Give agents tools, permissions and saved progress.
---
Give agents tools, permissions and saved progress.

## A The main path

```flow LR
Agent -> Discover permitted tools
Discover permitted tools -> Request action
Request action -> Human approval: when required
Human approval -> Execute permitted action
Execute permitted action -> Save receipt and checkpoint
```

## B How the parts work

The shared dispatcher applies access policy. Stable action keys preserve identity across retries and uncertain results.

## C What to keep in mind

An interrupted connection is not proof an external action failed. Reconcile uncertain outcomes before repeating effects.

This diagram explains the implementation concept. It is not live system telemetry.
