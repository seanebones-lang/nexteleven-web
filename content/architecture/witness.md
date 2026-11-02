---
template: doc
theme: blueprint
title: Inside Witness
subtitle: Preserve the path from sources to claims.
---
Preserve the path from sources to claims.

## A The main path

```flow LR
Source -> Observed record
Observed record -> Inference: recorded premises
Generated content -> Generated record
Inference -> Provenance graph
Generated record -> Provenance graph
```

## B How the parts work

Observed, Inferred and Generated are distinct record types. Premises and provenance links let a reader inspect how a conclusion arose.

## C What to keep in mind

Signatures and hashes help inspect record identity. They do not establish that an observation or claim is true.

This diagram explains the implementation concept. It is not live system telemetry.
