# React Router v6 Nested Route Matching Bug

This repository demonstrates a bug in React Router v6 related to unexpected route matching when nested routes share path segments.  The bug causes routes to not always match the most specific path, leading to incorrect component rendering.

## Bug Description

When defining nested routes with overlapping paths, React Router v6 may not always select the most specific route. This can result in unexpected behavior and incorrect component rendering.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.
4. Observe the unexpected route matching behavior.

## Solution

The provided solution ensures that nested routes are defined in a way that prevents path ambiguity.  Properly defining the paths will ensure the most specific route is always matched.