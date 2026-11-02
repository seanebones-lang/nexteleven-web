---
template: doc
theme: blueprint
title: Inside APOLLO
subtitle: Turn build history into a useful diagnosis.
---
Turn build history into a useful diagnosis.

## A The main path

```flow LR
Build logs -> Normalize build record
Normalize build record -> Extract errors
Extract errors -> Failure fingerprint
Failure fingerprint -> Match history
Match history -> Explain recurring failure
```

## B How the parts work

A local SQLite history connects normalized errors with prior builds, retries and candidate fixing commits. Model-assisted explanation is optional.

## C What to keep in mind

A suggested cause is a diagnosis to inspect. Build history does not prove the next build will succeed.

This diagram explains the implementation concept. It is not live system telemetry.
