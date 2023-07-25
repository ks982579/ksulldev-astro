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

## 4.4 Vector Operations 
p. 100

### The $\nabla$ Operator

The _nabla_ $\nabla$ operator is used in applications of derivatives of vector fields. For Cartesian coordinates, the operator is defined to take partial derivatives coordinate-wise:

$$
\begin{align*}
\nabla &\equiv \frac{\partial}{\partial x} \vec{i} + \frac{\partial}{\partial y} \vec{j} + \frac{\partial}{\partial z} \vec{k} \\
&\equiv \left(
\frac{\partial}{\partial x},\,\frac{\partial}{\partial y},\,\frac{\partial}{\partial z}
\right)
\end{align*}
$$

_equations 4.17 and 4.18_

The coordinates and vectors align with Cartesian coordinates and unit vectors. 

Coordinate-wise second partial derivatives can be obtained with repeated application of nabla operator:

$$
\Delta = \nabla^2 = \nabla \cdot \nabla = 
\frac{\partial^2}{\partial x^2} +
\frac{\partial^2}{\partial y^2} +
\frac{\partial^2}{\partial z^2}
$$

_equation 4.19_

The resulting operator is called the Delta, or Laplace, operator. 

### Gradient of a Scalar Field
p. 100

Important application of nabla operator is determining rate of change of a scalar field in a given direction called the _directional derivative_. That is, moving from one point to another. In our room with the radiator example, moving across the room. 

When we use calculus, we imagine moving from point $P(x_0, y_0, z_0)$ to another point only a small distance away, along the line $g(s, \vec{a}) = \vec{x} + s \vec{a}$. The direction of the vector is given by $\vec{a}$, and $\vec{x}$ is the position vector of $P$, and $s$ is just a scalar. 

Let's list some information:
+ The value of the field at the new point is $\Phi(x+sa_x,  y+sa_y, z+sa_z)$
+ The rate of change of $\Phi$ is in the direction of $\vec{a}$ and usually denoted as $\nabla_a$. 

Now,

$$
\begin{align*}
\frac{d \phi(s)}{ds} &= \frac{\partial \phi}{\partial x} \frac{dx}{ds} +
\frac{\partial \phi}{\partial y} \frac{dy}{ds} +
\frac{\partial \phi}{\partial z} \frac{dz}{ds}\\
&= \frac{\partial \phi}{\partial x} a_x +
\frac{\partial \phi}{\partial y} a_y +
\frac{\partial \phi}{\partial z} a_z\\
&= \vec{a} \cdot \nabla \phi
\end{align*}
$$

_equations 4.20, 4.21, and 4.22_

The quantity $\nabla \phi$ is called the **gradient** of a scalar field $\phi$, and describes the direction of steepest ascent from any point in the field. The derivative itself describes the rate of change of the field $\phi$ for some distance $s$ in a given direction $\vec{a}$. 

> A vector field $\vec{V}$ that is the gradient of some some scalar field $\phi$ is called _conservative_, and the corresponding scalar field $\phi$ is called the potential of this conservative field. 

#### Example

Given $\phi = x^2y^3z^4$, find the gradient of the scalar field.

To do this, apply the _nabla_ operator:

$$
\nabla \phi = 2xy^3z^4\vec{i} + 3x^2y^2z^4 \vec{j} + 4x^2y^3z^3\vec{k}
$$

It's just the partial derivative of each variable, added together.

$\Box$

### Divergence of a Vector Field

The scalar product of the nabla operator with a vector field is called the **divergence** of vector field $\vec{V}$:

$$
\nabla \cdot \vec{V} = \text{div} \vec{V}
$$

_equation 4.23_

The _divergence_ is a measure of the **flux** of a vector field at any given point. The **flux** of a vector field can be interpreted as how much the field acts like _source_ or a _drain_ at a given point. 

The book describes water in a tub. The flux of the water is zero as no water comes in or leaves. However, if there's a pipe adding water to the tub, the flux $\gt 0$. And if the water leaves the tub, flux $\lt 0$. 

Another example in physics is an electric point charge from which field lines extend to infinity. 

### Curl of a Vector Field
p. 102

The **curl** of a vector field is the cross product of the nabla operator and a vector field:

$$
\nabla \times \vec{V} = \text{curl } \vec{V}
$$

_equation 4.24_

Since the cross product describes vectors perpendicular to the plane, the curl describes the _whirliness_ of a vector field. More technical, the **curl** describes the angular velocity of the vector field in the area around any point. 

---

# Calculus

[Supported Functions · KaTeX](https://katex.org/docs/supported.html)

```yml
title: Calculus
authors: 
	- Gilbert Strang
publisher: Massachusetts Institute of Technology
year: ?
```

## Ch. 15 - Vector Calculus

Double and triple integrals help find area, volume, or mass by adding small pieces. However, something important was missing - the Fundamental Theorem of Calculus. To bridge this gap, we introduce the concept of line integrals, which integrate along curves. This connects double integrals over regions to single integrals along their boundary curves. These ideas have applications in science and engineering, using vector fields and terms like potential functions, divergence, curl, flux, circulation, and work. Examples are provided to illustrate these concepts.

### 15.1 - Vector Fields

Start with regular scalar functions. A simple function has a number input, call it $x$, and a number output, denoted $f(x)$. 

For a **vector field**, or a **vector function**, the input is a point $(x,y)$, and the output is a two-dimensional vector $F(x,y)$. And so, there is a _field_ of vectors, one at every point. This easily extends to more dimensions.

**Definition - Vector Field:** Let $\mathbb{R}$ be a region in the $x\,y$ plane. A **vector field** $F$ assigns to every point $(x,y)$ in $\mathbb{R}$ a vector $F(x,y)$ with two components:

$$
F(x,y) = M(x,y)i + N(x,y)j
$$

This plane vector field involves two functions of two variables. 

A _vector_ has fixed components. A _vector field_ has varying components.

For completeness, let's extend to 3-dimensions

$$
F(x,y,z) = M(x,y)i + N(x,y)j + P(x,y,z)k
$$

A **Gradient Field** starts with an ordinary function $f(x,y)$. The Components $M(x,y)$ and $N(x,y)$ are actually the partial derivatives of $\partial f/ \partial x$ and $\partial f/ \partial y$. The Field $F$ is the gradient of $f$

$$
F = \text{grad} f = \nabla f = \frac{\partial f}{\partial x} i + \frac{\partial f}{\partial y} j
$$

This vector field gradient $f$ is everywhere perpendicular to the level curves $f(x,y)=c$. 

The length $|\nabla f|$ tells how fast $f$ is changing. 

**EXAMPLE**

Let $f = xy^2$. $M$ is the partial with respect to $x$ and $N$ is same but to $y$. 

$$
\begin{align*}
M(x,y) &= \frac{\partial f}{\partial x} = y^2\\
N(x,y) &= \frac{\partial f}{\partial y} = 2xy\\
F(x,y) &= y^2i + 2xyj
\end{align*}
$$

$\Box$

For _every_ vector field, as the following:
+ Is it a gradient field?
+ If so, what is $f$?

Cool example from fluid physics on p. 551. It multiplies a velocity by density to create a _flow field_, which is the rate of mass transport. 

p. 552 shows how gravity is a **gradient field**.

**Definition - Field Line:** $C$ is a **field line**, aka integral curve, if the vectors $F(x,y)$ are tangent to $C$. The slope $dy/dx$ of the curve $C$ equals the slope $N/M$ of the vector $F=Mi+Nj$.

These are still field vectors, but they are infinitesimally short and then connected into a curve. 

p. 554 has lots of exercises

### 15.2 - Line Integrals
p. 555

A line integral is an integral along a curve. It can equal an area, but that is a special case. In physics, it can have other meanings. 

**Definition - Fundamental Theorem for a Line Integral:** As long as $F$ is a gradient of some $f$, if $df$ is infinitesimal work done, then $\int df = f(Q) - f(P)$ is the total work. 

We continue with this thought, that

$$
\begin{align*}
F \cdot T ds &= \left( \frac{\partial f}{\partial x}i + \frac{\partial f}{\partial y}j \right) \cdot (dx\ i - dy\ j)\\
&= \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial y}dy\\
&= df
\end{align*}
$$

You can see how the dot product works there I hope. The $T$ is a small movement, some vector, and $F$ is some gradient or rate of change.

#### Definition of Line Integrals

Starting around the beginning, suppose $F \cdot T$ is like a function $g(x,y)$. The integral is then the limit of sums as $\Delta s \to 0$ , where $\Delta s$ is the step size between points. 

We introduce time $t$ as that might make the most sense. The differential $ds$ then becomes $(ds/dt)dt$. Everything changes over to $t$

$$
\int g(x,y) ds = \int_{t=a}^{t=b} g(x(t), y(t)) \sqrt{(dx/dt)^2+(dy/dt)^2}dt
$$

Since $ds$ is a tiny length, this intuitively makes sense. 

#### Different Forms of Work Integral

The vector to a point on $\mathcal{C}$ is $R=xi+yj$. Then $dR = Tds=dxi+dyj$

$$
work = \int_C F \cdot dR = \int_C Mdx + Ndy
$$

And that easily extends to more dimensions. But we are just breaking integrals into components. 

Not all paths yield the same work done. For _conservative_ fields, all paths yield the same work. How to decide which fields are conservative without trying all paths? Here are properties of conservative fields in a plane region $R$ with no holes...

$F=M(x,y)i + N(x,y)j$ is a conservative field if it has these properties

+ Work $\int F \cdot dR$ around every closed path is zero
+ Work $\int_P^Q F \cdot dR$ depends only on $P$ and $Q$, not the path
+ $F$ is a gradient field: $M=\partial f / \partial x$ and $N = \partial f / \partial y$ for some potential $f(x.y)$
+ Component satisfy $\partial M / \partial y = \partial N / \partial x$. 

Apparently a field with one of these properties has them all and the last is a quick test. The last states that the _curl_ of $F=0$, a concept for later. 

### 15.3 - Green's Theorem

George Green's theorem connects a double integral over a region $R$ to a line integral along its boundary $C$. 

**Definition - Green's Theorem:** Suppose the region $R$ is bound by the simple closed piecewise smooth curve $C$. Then the integral over $R$ equals a line integral around $C$

$$
\oint_C Mdx+Ndy= \iint_R\left( 
\frac{\partial N}{\partial x} -
\frac{\partial M}{\partial y}
\right) dx\ dy
$$

The closed circle in the integral sign indicates the path is _closed_, the endpoints are the same. A _simple_ path doesn't cross over itself. 

Starting on p. 564, the author tests special cases. Pp. 565-566 the author covers a proof of the theorem. 

**EXAMPLE**

Wondering if I can conjure an example. Note $Mi + Nj$ is a _gradient field_. Found this one, and I'll try to break it down...

You are given the following to solve

$$
\oint_C y^3dx - x^3dy
$$

This is an integral over a region where $\mathcal{C}$ is a circle of radius 4 centered in the origin. So, we begin with the Green's Theorem transformation

$$
\oint_C y^3dx - x^3dy = \iint_R-3x^2-3y^2 dA
$$

All we did was take derivatives and switch around components and operators. Now, we are dealing with a circular region, and if we pull out the $-3$, you'll see $x^2+y^2$ in the integrand. We are going to confusingly shift from Cartesian to Polar coordinates. [Converting Cartesian Coordinates to Polar | Brilliant Math & Science Wiki](https://brilliant.org/wiki/convert-cartesian-coordinates-to-polar/)

$$
\begin{align*}
r &= \sqrt{x^2+y^2}\\
\theta &= \tan^{-1}(y/x)
\end{align*}
$$

where

$$
\begin{align*}
x &= r\cos(\theta)\\
y &= r\sin(\theta)
\end{align*}
$$

The bounds of integration will be simple though.

$$
= -3 \int_0^{2\pi}\int_0^2 r^3 dr\ d\theta
$$

I'm not sure where the $r^3$ comes from but can't spend any more time looking. 
+ [Calculus III - Double Integrals in Polar Coordinates (lamar.edu)](https://tutorial.math.lamar.edu/Classes/CalcIII/DIPolarCoords.aspx)

Thank you Paul's Online Notes. It is super important to realize that $dA \neq dr\ d\theta$. I completely forgot about actually converting $dA$. Paul proves the concept in a problem outlined on [Calculus III - Change of Variables (lamar.edu)](https://tutorial.math.lamar.edu/Classes/CalcIII/ChangeOfVariables.aspx). It looks to require a determinant and a Jacobian. In the end, $dA = r\ dr\ d\theta$.

Now, we integrate!

$$
\begin{align*}
&= -3 \int_0^{2\pi}\int_0^2 r^3 dr\ d\theta \\
&= -3 \int_0^{2\pi} \frac{1}{4}[r^4]_0^2\ d \theta\\
&= -3 \int_0^{2\pi} \frac{1}{4}\left(16-0 \right) d \theta\\
&= -3 \int_0^{2\pi} 4\ d \theta\\
&= -3 [4 \theta]_0^{2 \pi}\\
&= -3 \left(4*2*\pi - 0\right)\\
&=-24 \pi
\end{align*}
$$

The area enclosed in a circle $\Box$.

#### Conservative Fields 
p. 567 (587)

**Definition - Differential Form:** The expression $M(x,y)dx+N(x,y)dy$ is a **differential form**. And when it agrees with the differential $df=(\partial f/ \partial x)dx + (\partial f/ \partial y)dy$ of some function, the form is **exact**. The test for an exact differential is **D:** $\partial N / \partial x = \partial M / \partial y$. 

#### Flow Across a Curve: Green's Theorem turned by $90^o$

Consider the flow of water with velocity $M(x,y)i + N(x,y)j$. At some boundary $\mathcal{C}$ the water can flow in or out. The new form of Green's Theorem is a fundamental "balance equation" of applied mathematics:

flow through C (out minus in) = replacement in R (source minus sink)

Because flow is steady, whatever goes out through C must be replaced by R. And when there are no sources or sinks, the total flow through C must be 0. This is Green's Theorem in its _normal form_ instead of its tangential form.

**Definition - Green's Theorem Normal Form:** for a steady flow field $F=M(x,y)i+N(x,y)j$, the flux $\int F \cdot n ds$ through the boundary C balances the replacement of fluid inside R such that

$$
\oint_C Mdy-Ndx = \iint_R\left(
\frac{\partial M}{\partial x} + \frac{\partial N}{\partial y}
\right)dxdy
$$

Images are quite interesting. Before, we had our _tangential_ line that was tangent to the curve we were integrating. This new form is for a normal line that is orthogonal to the curve. 

**Easy Example**

Consider $F=2x\ i+3y\ j$. Suppose it's a rectangular region with sides $a$ and $b$. 

The solution would look like

$$
\begin{align*}
\frac{\partial M}{\partial x}+\frac{\partial N}{\partial y} &= 2+3\\ \\
\oint &= \iint_R5\ dx \ dy \\
&= \int_b 5x|_0^a\\
&\ldots\\
&= 5ab
\end{align*}
$$

#### Flow Fields Without Sources

Conservative fields do 0 work around $\mathcal{C}$. They have a potential $f$, and they have _zero curl_. Turn the statements through $90^o$ and you have
+ source-free fields have no flux through $\mathcal{C}$
+ they have stream functions $g$
+ they have _zero divergence_

Let's draw technical definitions of fields without sources:

For field $F=M(x,y)\ i+N(x,y)\ j$, it is source-free if it has the following properties:
+ The total flux $\oint F \cdot n ds$ through every closed curve is zero
+ Across all curves from $P$ to $Q$, the flux $\int_P^Q F \cdot n\ ds$ is the same
+ there is a stream function $g(x,y)$, for which $M=\partial g / \partial y$ and $N = - \partial g / \partial x$
+ The components satisfy $\partial M / \partial x + \partial N / \partial y = 0$ (divergence is zero).

A field with one of these properties has them all. The last is the quick test. 

Calling it on p. 570, which is just before the chapter's end. 

15.4 discusses surface integrals. We have been talking about flat surfaces basically. But the surface of 3D shapes are curved surfaces. 

15.5 discusses the divergence theorem, which is like the 3d form of Green's Theorem in normal form. 

15.6 is Stokes' Theorem and the Curl of F. 

# Questions

---

This is False:
+ We can only define the derivative of vector functions with a single scalar argument.

These are true:
+ The derivative of a vector function with a scalar argument is also a vector function, whose vector values have the same dimension as the original function.
+ There is a product rule for differentiating the product of a scalar function and a vector function or the dot/cross product of two vector functions.
+ A vector function with a scalar argument is a function from $\mathbb{R}$ to $\mathbb{R}^n$ for some $n \gt 0$. 

---

The relationship between an integral over an interval on the x-axis and an integral over a path is analogous to the relationship between
+ …the double integral over a region R on the xy-plane and the integral over an arbitrary surface A (parameterized by two variables).

Not analogous to
+ …the single integral over an interval and the double integral over a rectangle.
+ …the integral of a vector field along a path and the integral of a vector field along a surface.
+ ...the integral of a scalar valued function and the integral of a vector valued function.

---

Support a vector field on $\mathbb{R}^2$ is given by $\vec{F}(x,y) = y \cdot \vec{i} + x \cdot \vec{j}$. What is not a correct expression for work done along the circle arc C given by $\vec{r}(t) = \cos(t) \vec{i} + \sin(t) \vec{j}$, with $0 \lt t \lt \pi / 2$. 

Incorrect
+ $\int_0^{\pi/2} \sin(t) \vec{i} + \cos(t) \vec{j} dt$

I believe from cartesian to polar coordinates, the conversion is incorrect. 


What is correct?
+ $\int_0^{\pi/2}(-\sin^2(t)+cos^2(t))dt$.
+ $\int_C \vec{F} \cdot \vec{dr}$
+ $\int_0^{\pi/2} y(t) \cdot x'(t) + x(t) \cdot y'(t)$


---

which of the follow is a real-world example of a scalar field?
+ Water pressure at each point in a swimming pool

These are not:
+ the humidity and temperature at each point in a room
+ the magnetic field surrounding a magnetic substance
	+ clearly has direction
+ the wind velocity at each point on the Earth’s surface
	+ clearly has direction

---

Given $\vec{V}(x,y) = x \cdot \vec{i}$ find the curl, gradient, and divergence. 

$$
\begin{gather*}
\nabla = \frac{\partial}{\partial x}\ \vec{i} + \frac{\partial}{\partial y}\ \vec{j} = \text{in our case}= \vec{i}\\

\end{gather*}
$$

The divergence of $\text{div} \vec{V} \neq 0$ 

$$
\nabla \cdot \vec{V} = x*1\vec{i} + 0\vec{j}
$$

Basically, what is equal to zero?
+ $\text{grad}(\vec{V}(x,y) \cdot \vec{j}) = 0$
+ $\vec{V}(0, 5) = 0\vec{i}$
+ $\text{curl}(\vec{V}) = 0$
