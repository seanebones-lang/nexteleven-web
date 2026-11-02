---
template: doc
theme: blueprint
title: Inside DeadBolt
subtitle: Check authority before a protected action starts.
---
Check authority before a protected action starts.

## A The main path

```flow LR
Executor -> Proposed action
Proposed action -> Fresh admission check
Fresh admission check -> Admit: current authority allows
Fresh admission check -> Refuse: revoked or outside scope
Admit -> Executor dispatch
```

## B How the parts work

The integrated executor asks for admission at its dispatch boundary. Operator controls can withdraw later admissions.

## C What to keep in mind

A future-action gate does not itself cancel an action already executing. Integration coverage matters.

This diagram explains the implementation concept. It is not live system telemetry.
