---
layout: '@layouts/NotesLayout.astro'
title: 'Vector Calculus'
pubDate: 2023-07-17
description: 'Notes on vector calculus'
author: 'Kevin Sullivan'
tags: ["astro", "blogging", "maths", "vectors"]
---

```yaml
title: Advanced Mathematics
subtitle: DLMDSAM01
Author: Dr. Robert Graf
publisher: IU International University of Applied Sciences
year: 2023
```

# Unit 4 Vector Calculus

Quick overview of our learning goals:
+ how to differentiate and integrate vector functions
+ how to differentiate along an arbitrary line
+ how to integrate over an arbitrary surface
+ what scalar fields and vector fields are and how to visualize them
+ how to use and interpret vector operators on scalar and vector fields

Not sure if I missed this, but Wikipedia has this article, [Differentiation rules - Wikipedia](https://en.wikipedia.org/wiki/Differentiation_rules), with all of the best derivative rules. 

## Introduction

We are going to combine calculus with vectors. Think of it like finding rates of change of objects moving through three dimensional space, like a plane flying. 

Two important concepts of vector calculus are _scalar_ and _vector_ fields. 

## 4.1 Differentiation of Vectors

### Differentiation of Vector Functions

We consider representing a **vector function** with scalar argument $u$ as:

$$
\vec{a} = \vec{a}(u)
$$

That looks simple enough. Let our function be expressed in three-dimensional _Cartesian_ space as follows:

$$
\vec{a}(u) = a_x(u)\vec{i} + a_y(u)\vec{j} + a_z(u)\vec{k}
$$

We have, say, a linear combination of magnitude functions multiplied by their corresponding unit vectors for direction. This is quite handy when thinking in terms of derivatives because of the **sum rule** for derivatives makes it quite easy. 

Let us write a derivative for a vector:

$$
\begin{align*}
\frac{d\vec{a}}{du} &= \lim_{\Delta u \to 0}
\frac{\vec{a}(u+\Delta u)-\vec{a}(u)}{\Delta u}\\
&= \frac{da_x}{du}\vec{i} + \frac{da_y}{du}\vec{j} + \frac{da_z}{du}\vec{k}
\end{align*}
$$

_equations 4.1 & 4.2_

The derivative of a vector function will also be a vector. The two vectors might also not even be parallel. That should make intuitive sense. An object can have a force pushing/accelerating it in one direction whilst the velocity continues in another. 

### Rules of Differentiation of Vector Functions

Instead of reverting back to the definition of a derivative in all cases, there are rules just like for scalar functions. 

**Theorem 4.1.1 - Rules of Vector Derivatives:** Let $\vec{a}$ and $\vec{b}$ be differentiable vector functions and $\phi$ be a differentiable scalar function. It follows that:

$$
\frac{d(\phi \vec{a})}{du} = \phi\frac{d(\vec{a})}{du} + \frac{d(\phi)}{du}\vec{a}
$$

_Equation 4.4_

$$
\frac{d( \vec{a} \cdot \vec{b} )}{du} 
= \vec{a} \cdot \frac{d\vec{b}}{du} + \frac{d\vec{a}}{du} \cdot \vec{b}
$$

_Equation 4.5_

$$
\frac{d(\vec{a} \times \vec{b})}{du} 
= \vec{a} \times \frac{d\vec{b}}{du}
+ \frac{d\vec{a}}{du} \times \vec{b}
$$

_Equation 4.6_

I could be wrong, but the order for the dot product isn't terribly important. However, the order of operations for the cross product does matter. As such, might be easier to just write them all in the same format. 

**Example**

Suppose we have a point particle circling a centre with constant speed and fixed radius. Pretend it's an electron circling a nucleus. Show that for any time $t$, the velocity vector is perpendicular to the position vector. 

Let $\vec{r}(t)$ denote the position function. The point particle is always the same distances from the centre of the circle, so $|\vec{r} \cdot \vec{r}| = r^2$ is constant. 

Additionally, velocity $\vec{v}(t)$ has a constant magnitude, so $|\vec{v} \cdot \vec{v}| = v^2$. And Hence,

$$
\begin{align*}
\frac{d}{dt}(\vec{r} \cdot \vec{r}) &= \vec{r} \cdot \vec{v} + \vec{v} \cdot \vec{r}\\
&= 2 (\vec{r} \cdot \vec{v}) \\
&= 0
\end{align*}
$$

That implies that $\vec{r} \perp \vec{v}$. 

The derivative of position is velocity. And for the dot product to be 0 requires the vectors to be perpendicular, like $(r_x*0 + 0*v_y)$. 

Ok... So what is the logic behind it all? It's more thought provoking than mathematical. In essence, we are leaning on the facts that the magnitude of both the radius and velocity are constant, and that the derivative of a constant is 0. And so, if we massage the variables into the format of showing what we want.

### Vector functions with Multiple Scalar Arguments

For multivariable scalar functions, we use _partial derivatives_ to express the rate of change of a function with respect to a single variable. Same idea for vector functions!

If we let $\vec{a}(u_1, u_2, ..., u_n)$ be a vector function with multiple scalar arguments, then:

$$
\frac{ \partial \vec{a}}{\partial u_i}
$$

_equation 4.7_

Just like with scalar functions, treat all variables $u_j$ where $j \neq i$ as constants during differentiation. 

Now, we can prove a version of the chain rule to compute derivatives of vector functions $\vec{a}$ whose arguments $u_i$ themselves are functions of some variables $v_i$. 

$$
\frac{ \partial \vec{a}}{\partial v_i} = \sum_{j=1}^n 
\frac{\partial \vec{a}}{\partial u_j} 
\frac{\partial u_j}{\partial v_i}
$$

_equation 4.8_

## 4.2 Integration of Vectors

Consider a vector function $\vec{a}(u)$ as the derivative of some function $\vec{A}$. The integral can be seen as the antiderivative:

$$
\int \vec{a}(u)du=\vec{A}(u) + \vec{b}
$$

_equation 4.9_

It's interesting to note that $\vec{b}$ is not just a constant value, but an arbitrary constant vector. 

We also have a definite integral as:

$$
\int_{c_1}^{c_2} \vec{a}(u)du = \vec{A}(c_2) - \vec{A}(c_1)
$$

_equation 4.10_

The antiderivative of a vector function is also a vector function, and its constant of integration is a vector constant. 

### Integration Along Paths

For scalar functions, we would integrate along an axis, or axes. However, we can integrate along an arbitrary path instead of specifically along a coordinate axes. Concept leads a hand in Physics when we calculate work performed when applying a force along a path. 

Work is defined as $W=F*r$, where $F$ is the force and $r$ is a distance. Work is a scalar but $\vec{r}$ can be a path not along an axes and $\vec{F}$ can also be applied in directions not parallel to an axes. 

We say that work along path $C$ becomes:

$$
W = \int_C \vec{F} \cdot d\vec{r}
$$

_equation 4.11_

Only the component of force that is parallel to the line tangent to the curve contributes to the work done moving an object along the curve $C$. Thus, work is given by the scalar product of the vectors for the force and the parametrization of the curve. The path $\vec{r}(t)$ parameterizes the way the force is applied:

$$
\vec{r}(t) = (x(t), y(t), z(t))
$$

_equation 4.12_

Now, the differential is given by:

$$
d\vec{r}(t) = (dx, dy, dz) = \left(\frac{dx}{dt}dt, \frac{dy}{dt}dt, \frac{dz}{dt}dt \right)
$$

_equation 4.13_

### Integration Over Surfaces
p. 96

We will extend double integration to integrate over an arbitrary surface. For a fixed surface, we need 2 _free_ variables in order to parametrize a surface. Below is an example function:

$$
\vec{r}(u,v) = \vec{r}_0 + u \vec{a} + v \vec{b}
$$

_equation 4.14_

So, $\vec{r}_0$ is the fixed point in the surface, and **anchor point**, anchoring to the surface in space. the rest is a linear combination that spans the surface. 

Cartesian coordinate axes are orthogonal and create a rectangular area over which to integrate. The small surface area generated by $\vec{a}$ and $\vec{b}$ will generally be a parallelogram and

$$
d \vec{A} = \left|
\frac{\partial \vec{r}(u,v)}{\partial u} \times \frac{\partial \vec{r}(u,v)}{\partial v}
\right| \; du \; dv
$$

_equation 4.15_

Let me just have a look here... So, the derivative of an area, or its rate of change, is equal to the cross product of of its partial derivatives. Now, it's also the absolute value I believe which then makes this associate...

Finally, the integral over an arbitrary surface is then given by:

$$
\iint_A d\vec{A} = \iint_A \left|
\frac{\partial \vec{r}(u,v)}{\partial u} \times \frac{\partial \vec{r}(u,v)}{\partial v}
\right| \; du \; dv
$$

_equation 4.16_

There are no examples to accompany this.

## 4.3 Scalar and Vector Fields
p. 96

A **scalar field**, $\phi (x,y)$ is a function that assigns a scalar value to each point in a 2-D space. It relates a single (scalar) value to every point in a given area A. Do note this concept can expand beyond mere 2-D planes. 

The books provides an example of a radiator in the corner of a room. As the radiator heats up the room, the temperature is different at each point of the room, if only slightly. A thermometer stuck to the wall provides the temperature. The temperature is a scalar value that changes over time. It is the value of the scalar field at a particular point. 

Suppose we want to generate a function, the signature might look like $\phi(x,y,z,t)$, a function of 3-D spatial coordinates and time. 

In terms of water draining down a sink, we then introduce a vector field. A **vector field** relates a vector to every point in a given area $A$, and may look like $V=V(x,y,z,t)$. In the case of our water, think of it like every molecule of water has a velocity vector outlined by this function. Of course, working on such a subatomic level brings in numerous additional complexities, but we will ignore that at the moment for the sake of simplicity. But the quantum tunnelling of water molecules is incredibly interesting. 

The above vector field concept extends to include arbitrarily many variables.

Visualizing a vector field is a bit harder than a scalar field because you have to indicate direction as well. Lucky us, [Plotting Vector Fields in Python · Ajit Kumar (krajit.github.io)](https://krajit.github.io/sympy/vectorFields/vectorFields.html) is a quick article showing that Python and the MatPlotLib library allows us to plot such vector fields. MatLab is another useful tool in this area, with this article [Vector Fields - MATLAB & Simulink - MathWorks United Kingdom](https://uk.mathworks.com/help/matlab/vector-fields.html).
