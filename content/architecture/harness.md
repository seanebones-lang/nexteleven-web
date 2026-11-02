---
template: doc
theme: blueprint
title: Inside Harness
subtitle: Run an assistant with explicit tools and saved work.
---
Run an assistant with explicit tools and saved work.

## A The main path

```flow LR
User task -> Session
Session -> Provider and model route
Session -> Tool dispatcher
Tool dispatcher -> Repository tools
Tool dispatcher -> Bounded workers
Repository tools -> Saved session
```

## B How the parts work

A Rust assistant brings provider routing, tools, work sessions and worker coordination into one configurable workflow.

## C What to keep in mind

Providers and optional controls require operator configuration. Availability depends on the chosen integration.

This diagram explains the implementation concept. It is not live system telemetry.
