---
layout: '@layouts/NotesLayout.astro'
title: 'Calculus'
pubDate: 2023-06-14
description: 'This is the first post of my new Astro blog.'
author: 'Kevin Sullivan'
tags: ["astro", "blogging", "maths"]
---

```yaml
title: Advanced Mathematics
subtitle: DLMDSAM01
Author: Dr. Robert Graf
publisher: IU International University of Applied Sciences
year: 2023
```

# Unit 3 Vector Algebra

Think of a vector like one piece of information, but broken down into its most fundamental components. Focusing on 2 and 3 dimensional space, $\mathbb{R}^2$ and $\mathbb{R}^3$, we will probably look at the Cartesian plane and space. That is, with typical $x$, $y$, and $z$ axes. 

Applications of vector operations lends to information science, machine learning, and the wider computer science. 

Suggested reads are:
+ _Calculus_, by Strang, 2017
    + Chapters 11 and 12
    + [Calculus (mit.edu)](https://ocw.mit.edu/ans7870/resources/Strang/Edited/Calculus/Calculus.pdf)
+ _Advanced Calculus_, by Loomis and Sternberg, 2014
    + Chapters 1 and 2
    + [Advanced Calculus (worldscientific.com)](https://www.worldscientific.com/worldscibooks/10.1142/9095#t=aboutBook)
    + Much older pdf: [Advanced_Calculus.pdf (harvard.edu)](https://people.math.harvard.edu/~shlomo/docs/Advanced_Calculus.pdf)

## 3.1 Scalars and Vectors

A **vector** is an element of a mathematical structure called a vector space. It can be thought of as a mathematical object with magnitude and direction. However, for machine learning and information science, vectors might not have anything to do with physical space.

We analyse vectors by breaking them into their component parts. 

### 2-Dimensional Vectors

Let's consider initial point $P=(p_1, p_2)$ in the $x,y$ coordinate plane. It has a terminal point $Q=(q_1, q_2)$. The vector representing travel from $P$ to $Q$ is $\overrightarrow{PQ}$. The magnitude is the length of the line segment, which we obtain from the distance formula. In our case:

$$
|\overrightarrow{PQ}|=\sqrt{
(q_1-p_1)^2+(q_2-p_2)^2
}
$$

A vector is **standard position** has an initial point at the _origin_, $(0,0)$, and is called a **position vector**. Additional notation is described for $n$-dimensions. 

**Fundamental Definitions**:
+ Two vectors $\vec{a} = (a_1, ..., a_n)$ and $\vec{b} = (b_1, ..., b_n)$ are equal, $\vec{a}=\vec{b}$, if and only if, $n=m$ (same dimensions) and $a_i=b_i \; \forall \; 1 \leq i \leq n$.
    + Same magnitude and direction.
+ The negation of a vector is a vector having same magnitude but opposite direction. Given $\vec{a}$ from above, $-\vec{a} = (-a_1,...,-a_n)$.
    + When you sum the vectors, the result should be 0. 
+ A **unit vector** has a magnitude of one, $|\vec{v}|=1$. 
    + This keeps track of direction. 

Trigonometry can play a big role in separating vectors into their component values in physical space. 

Suppose we have a golfer who just hit a golf ball. We are going to ignore most of the other forces and things in this space as it is a quick and general demo of vector analysis. The ball is hit with 100 Newtons of force at $50^o\measuredangle$. Can we separate into $x,y$ coordinates? 

The book as a different example. Sine will give you the y value, and cosine should be x. Since the angle is greater than $45^o$, the $y$ values should be greater than $x$. $(64.3 ,76.6)$.

I didn't believe it at first but

$$
64.3^2+76.6^2 \approx 100^2
$$
Similarly, if you are given starting and ending points, you can use inverse (or arc) trig to get the angle.

## 3.2 Addition and Subtraction of Vectors

### Properties of Addition and Subtraction of Vectors

A mathematical **field** is a set of which addition, multiplication, subtraction, and division are defined and behave the same way as for rational and real numbers. What do we mean by a _set_? Yes, like the set of real numbers $\mathbb{R}$, and/or complex numbers $\mathbb{C}$.

Addition and subtractions of vectors works by adding and subtracting their components. In Physics, it works the same when adding forces together if they collide. 

$$
\begin{align*}
\text{Let} \quad \vec{v} &= (v_1, ..., v_n)\\
\text{Let} \quad \vec{u} &= (u_1, ..., u_n)\\
\text{Then} \quad \vec{v} + \vec{u} &= (v_1 + u_1, ..., v_n + u_n)\\
\text{And} \quad \vec{v} - \vec{u} &= (v_1 - u_1, ..., v_n - u_n)
\end{align*}
$$

Components of the vectors are elements of the field of real numbers, or complex numbers, addition is commutative (ie $a+b=b+a$). 

Vector addition is also associative, there exists an additive identity 0, and every element $v$ has an additive inverse $-\vec{v}$. The book as a wonderful table of properties on pp. 71-72. 

### Vectors in Two Dimensions

By $\mathbb{R}^2$, we mean the two-dimensional space of real numbers. The book also goes over a graphical way of adding and subtracting to make sense. Draw one vector, and then at the tip of that (as the origin), draw the next to add them. It's the same as component-wise addition. 

### Introduction to Bases

A **Spanning Set** is a set that allows us to express every vector as a _linear combination_ of elements in said set. What do we mean by _linear combination_?

A **linear combination** of elements is a sum of those elements. They may, or may not, be multiplied by a scalar. 

A **basis** for a vector space is the _minimal_ spanning set of vectors in that vector space. By minimal, we mean that if any vectors were removed, the set would no longer span the space. Some vector(s) would not be able to be formed as a linear combination of the remaining elements in the set. 

Consider the following... a two-dimensional space can be spanned by vectors $\vec{i}$ and $\vec{j}$, pointing along the $x$ and $y$ axes. Any element in this 2-D space (or plane) can be expressed by a linear combination (adding and possible scalar multiplication) of these two vectors. For example, the vector $\vec{v}=2\vec{i} + 3\vec{j}$. However, if we removed a vector from the space, say $\vec{i}$, we no longer span the space and could not create $\vec{v}$ as a linear combination of elements in this set. 

The above is more of an abstract understanding to assist in problem solving. Bases are fundamental to the study of vector spaces. We typically express the spanning set of vectors with _unit vectors_, discussed more below. 

Moving from one basis to another is an important question.

### Unit Vectors

A **unit vector** is a vector with magnitude of one. Each unit vector should point in a particular direction. To find a unit vector $\vec{u}$, 

$$
\vec{u} = \frac{\vec{v}}{|\vec{v}|} = \frac{1}{|\vec{v}|}\vec{v}
$$

Recall that $|\vec{v}|$ is the _magnitude_. Standard unit vectors are unit vectors that run parallel to the $x$ and $y$ axes. That is;

$$
\vec{i} = (1,0); \quad \vec{j} = (0,1)
$$

Any vector in 2-D space can be written as a linear combination of these two vectors. We can write a vector $\vec{a} = (3,-4)$ as the following linear combination:

$$
\vec{a} = 3\vec{i} - 4\vec{j}
$$

Another basis is of polar coordinates, with distance $r$ from the origin and angle $\theta$ with respect to the positive $x$ axis. Interesting to note, any two vectors that are not scalar multiple of one another will form a basis in 2-D space. This is guaranteed in 2-D but not in higher dimensions. Food for thought. 

### Vectors in Three-Dimensional Space

Moving right along, we can express unit vectors in 3-dimensional space like, the set is $\{\vec{i},\, \vec{j},\, \vec{k}\}$.

$$
\vec{i}=(1,0,0);\;\vec{j}=(0,1,0);\;\vec{k}=(0,0,1);
$$

They of course are directed along the axes. The magnitude can be found as $|\vec{r}|=\sqrt{x^2+y^2+z^2}$. 

### Collinear Vectors

Two vectors, $\vec{a} \text{ and } \vec{b}$, are **collinear** (generalization of parallel) if there exists a _real_ valued constant $c$ such that $\vec{a} = c\vec{b}$. The notation is $\vec{a}\Vert \vec{b}$. As you can see, the point in the same direction, but just have different magnitudes. Like tires on a car, or rockets and a spaceship. 

## 3.3 Multiplication of Vectors: Dot Product and Scalar Product

Multiplication of vectors is not the same as with normal numbers.

### Scalar or Dot Product

The **dot product** (AKA scalar product, but no one calls it this) produces a scalar output. Here it is... Let $\vec{a} = (a_1, ..., a_n)$ and $\vec{b} = (b_1, ..., b_n)$. The dot product is:

$$
\begin{align*}
\vec{a} \cdot \vec{b} &= a_1b_1 + a_2b_2 + ... + a_nb_n\\
&= \sum_{i=1}^n a_i+b_i\\
&= \sum_{i=0}^{n-1} a_i+b_i
\end{align*}
$$
.
The last two parts are just additional notation, the latter aimed at programming with a 0 index. They solidify the fact the dot product returns a scalar value. 

Here are some properties. We say that for all real vectors $\vec{u}\;,\;\vec{v}\;\text{and}\;\vec{w}\;\text{in}\;\mathbb{R}^n$, the following properties hold:

$$
\begin{align}
\vec{u}\cdot\vec{v} &= \vec{v}\cdot\vec{u}\\
\vec{u}\cdot(\vec{v}+\vec{w}) &= \vec{u}\cdot\vec{v}+\vec{u}\cdot\vec{u}\\
\vec{u}\cdot\vec{u} &= |\vec{u}|^2\\
\vec{u}\cdot(c\vec{v}) &= c(\vec{u}\cdot\vec{v})= c(\vec{u})\cdot\vec{v}\\
\end{align}
$$

The dot product can be extended to handle vectors in $mathbb{C}^n$ with complex numbers as well. We let $\vec{u}^*$ indicate the complex conjugate. It has the same properties except that the squared magnitude ends up being real. 

### Angle between two vectors

In 2-D and 3-D space, the dot product can be interpreted _geometrically_ as the angle between 2 vectors. 

In two dimensional space, $\mathbb{R}^2$, let $\theta$ denote the angle between vectors $\vec{a}=(a_1, a_2)$ and $\vec{b}$. Then, the cosine of the angle between the vectors is given by:

$$
\begin{align*}
\cos(\theta) &= \frac{\vec{a}\cdot\vec{b}}{|\vec{a}||\vec{b}|}\\
&= \frac{a_1b_1+a_2b_2}{|\vec{a}||\vec{b}|}\\
\end{align*}
$$

_equation 3.1_

Without proof, this also works in 3-dimensions. It implies:

$$
\theta = \arccos \left(
\frac{\vec{a}\cdot\vec{b}}{|\vec{a}||\vec{b}|}
\right)
$$

There's a proof on pp. 81-82. The cool think apparently is that we now also have an easy test for orthogonality in the case that $\vec{u} \cdot \vec{v} =0$. 

### Vector Projection

This is like breaking forces into their spacial coordinates. You are projecting a vector onto others, I think like the bases. The books suggests thinking of it like a shadow. The length of the shadow is **scalar projection**. The length and direction of the shadow is **vector projection**. 

The projection of $\vec{a}$ onto $\vec{b}$ is:

$$
\text{Proj}_{\vec{b}}(\vec{a}) = \frac{\vec{b}\cdot\vec{a}}{|\vec{b}|^2} \vec{b}
$$

The book on pp. 83-84 has a little proof based on logical thinking. 

### Inner Product

The **inner product** is a generalization of the dot product, and assigns a real, or complex, number to two vectors. We generally assume we will be working with complex numbers when using the inner product though. 

**Definition - Inner Product:** The inner product between vectors $\vec{a}$ and $\vec{b}$ is written as

$$
\begin{gather*}
\langle{
\vec{a} | \vec{b}
}\rangle\\
\text{OR}\\
\langle{
\vec{a},\, \vec{b}
}\rangle\\
\end{gather*}
$$

The following properties hold:

$$
\begin{align*}
\langle \vec{u} | \vec{v} \rangle &= \langle \vec{v} | \vec{u} \rangle^*\\
\langle \vec{u} | (c\vec{v} +d\vec{w}) \rangle &= c\langle \vec{u} | \vec{v} \rangle + d\langle \vec{u} | \vec{w} \rangle\\
\langle c\vec{u} + d\vec{v} | \vec{w} \rangle &= c^*\langle \vec{u} | \vec{w} \rangle + d^*\langle \vec{v} | \vec{w} \rangle\\
\langle c \vec{u} | d \vec{v} \rangle &= c^*d\langle \vec{u} | \vec{v} \rangle
\end{align*}
$$

And for orthogonal vectors, $\langle \vec{u} | \vec{v} \rangle = 0$. It's very interesting to see that there's a difference in results based on the order things happen within the inner product. It is more rigid than a regular dot product. 

I believe it to be the same operation. The _norm_ of a vector is $\|\vec{u}\|=\sqrt{\langle \vec{u} | \vec{u} \rangle}$.

### Cross Product

The **cross product** is is perpendicular to both vectors and normal to the plane that contains the vectors. Cross product is exclusive to vectors. There's also the linear algebra concept of matrix multiplication which is different. 


In three-dimensional space, let $\vec{a} = a_1\vec{i} + a_2 \vec{j} + a_3 \vec{k}$ and $\vec{b} = b_1\vec{i} + b_2 \vec{j} + b_3 \vec{k}$. The cross product is perpendicular to both given vectors and defined as:

$$
\vec{a}\times \vec{b} = (a_2b_3-b_2a_3)\vec{i} - (a_1b_3-b_1a_3) \vec{j} + (a_1b_2-b_1a_2)\vec{k}
$$

Each component is made up exclusively of only the other components. Additionally, any component crossing itself is 0 since something cannot be perpendicular to itself, in a manner of speaking. 

### Algebraic Properties of the Cross Product

For vectors $\vec{u}$ and $\vec{v}$ in $\mathbb{R}^3$, the following properties hold:

$$
\begin{gather*}
\vec{u} \times \vec{v} = -(\vec{v} \times \vec{u})\\
\vec{u} \times (\vec{v}+\vec{w}) = (\vec{u} \times \vec{v})+(\vec{u} \times \vec{w})\\
\vec{u} \times \vec{u} = \vec{0}\\
\vec{u} \cdot(\vec{v} \times \vec{w}) = (\vec{u} \times \vec{v}) \cdot \vec{w}
\end{gather*}
$$

Note that the cross product is not associative, that is $a(b\times c) \neq (a \times b)c$. 

### Geometric Properties of Cross Product

I know, it doesn't end...

1. If the vectors are scalar multiples of each other, then the cross product is 0. Again, if they are along the same access, you can't get perpendicular.
2. The cross product is orthogonal to both vectors. Think of the vectors forming a plane and the cross product shooting out of it into the 3rd dimension.
3. $|\vec{u} \times \vec{v}| = |\vec{u}||\vec{v}|\sin(\theta)$ is the magnitude. It's the area of the parallelogram formed by the vector with adjacent sides. 

$\Box$. 

---

```yaml
title: Single and Multivariable Calculus
subtitle: Early Transcendentals
Author: David Guichard
publisher: ?
year: 2022-12-01
```

# Single and Multivariable Calculus

## Ch. 12 Three Dimensions

### 12.1 The Coordinate System
p. 297

Explaining Cartesian coordinates $z=f(x,y)$. 

Distance between two points can be derived from the 2-D Pythagorean case. Let point 1 be $P_1(x_1, y_1. z_1)$, and point 2 be $P_2(x_2, y_2. z_2)$. We then have the distance between points written as:

$$
c = d(P_1,\,P_2) = \sqrt{(x_1-x_2)^2+(y_1-y_2)^2+(z_1-z_2)^2}
$$

Funny enough, the distance formula in 2 dimensions is the equation of a circle. In three dimensions, this is the equation for a sphere, or:

$$
r^2 = (x-h)^2+(y-k)^2+(z-l)^2
$$

Where $h,k,l$ represents the centre of the sphere.

Choose some points like $(2,2,3)$, $(8,6,5)$ and $(-1,0,2)$ and find the distance between them. Would they form a triangle?

### 12.2 Vectors
p. 300

A **vector** is "a quantity consisting of a non-negative magnitude and a direction." One representation can be with polar coordinates, $(m,\,\theta)$. 

A **displacement vector** represents a distance travelled. You can also have a **speed vector**, or just velocity, indicating rate of movement in a particular direction. You can continue this trend for acceleration and force as well. 

**Definition - Scalar Multiplication:** The scalar multiplication of vector $\vec{A}=(m,\,\theta)$ and scalar $a \geq 0\; \forall \; a \in \mathbb{R}$ is:

$$
a\vec{A} = (am,\,\theta)
$$

Notice it points in the same direction, but has a different magnitude. The scalar can be $a \lt 0$. The magnitude is always non-negative, but the direction will be inverted.

$$
\text{for} \;a \lt 0 \quad a\vec{A} = (|a|m,\,\theta+\pi)
$$

However, typically polar coordinates are not used. In general: 

$$
\langle \vec{v_1},\,\vec{w_1} \rangle + 
\langle \vec{v_2},\,\vec{w_2} \rangle = 
\langle \vec{v_1}+\vec{v_2},\;\vec{w_1}+\vec{w_2} \rangle
$$

This is the sum of vectors. It just means that we sum the vector components that are pointing along the same axis, or in the same direction. Scalar multiplication is just multiplying through the vector. And the magnitude of the vector is:

$$
|\langle v,w \rangle| = \sqrt{v^2 + w^2}
$$

Same concepts extend into three dimensions. 

**Unit vectors** have magnitude of one and mainly denote a direction. In 3 dimensions we use $i = (1,0,0),\, j=(0,1,0),\,k=(0,0,1)$. 

Theorem 12.2.2 on pp 304-305 lists properties already outlined in the course book. However, we are also provided a proof. 


### The Dot Product
p. 306

The question is that if two vectors begin at the same point, what is the angle between them? We can use trigonometry and the law of cosines here. 

Let $\vec{A} = (a_1, a_2, a_3)$ and $\vec{B} = (b_1, b_2, b_3)$. Then,

$$
\begin{align*}
|A - B|^2 &= |A|^2+|B|^2-2|A||B|\cos(\theta)\\
2|A||B|\cos(\theta) &= |A|^2+|B|^2-|A - B|^2\\\\
&= a_1^2 + a_2^2 + a_3^2+b_1^2 + b_2^2 + b_3^2 - \\&\quad(a_1-b_1)^2-(a_2-b_2)^2-(a_3-b_3)^2\\\\
&= a_1^2 + a_2^2 + a_3^2+b_1^2 + b_2^2 + b_3^2 - \\&\quad
(a_1^2-2a_1b_1+b_1^2)-(a_2^2-2a_2b_2+b_2^2)-(a_3^2-2a_3b_3+b_3^2)\\\\
&= 2a_1b_1+2a_2b_2+2a_3b_3 \\
\cos(\theta) &= \frac{2a_1b_1+2a_2b_2+2a_3b_3}{2|A||B|}\\
\cos(\theta) &= \frac{a_1b_1+a_2b_2+a_3b_3}{|A||B|}\\
\cos(\theta) &= \frac{A\cdot B}{|A||B|}\\
\end{align*}
$$

The [Law of Cosines](https://en.wikipedia.org/wiki/Law_of_cosines) is very much like Pythagorean Theorem. My confusion is around this $2$ that goes missing. When you expand the vectors out, amazingly all the elements end up with a factor of 2. So it divides out. I hope I was able to make that painfully clear. 

There's also this great [Dot product - Wikipedia](https://en.wikipedia.org/wiki/Dot_product) article. Basically, we named the numerator the **dot product**. 

Examples on p. 307

The **projection** of one vector onto another is to determine how much of a certain vector is pointing in the same direction as another. If $V$ is the vector that represents the projection of $A$ onto $B$, the **scalar projection of A onto B is**:

$$
\begin{align*}
|V| &= |A|\cos(\theta)\\
&= |A| \frac {A \cdot B} {|A||B|}\\
&= \frac {A \cdot B} {|B|}\\
\end{align*}
$$

But to get the vector of length $V$, we need to give the magnitude a direction. That direction is $B$. Get the _unit vector_ in the $B$ direction with $\vec{b} = B/|B|$, and therefore:

$$
\begin{align*}
|V| &= |A|\cos(\theta)\\
&= |A| \frac{B}{|B|} \frac {A \cdot B} {|A||B|}\\
&= B\frac {A \cdot B} {|B|^2}\\
\end{align*}
$$

It is assumed $0 \leq \theta \leq \pi / 2$. If $\pi / 2 \leq \theta \leq \pi$ then the vector $V$, projected from $A$ onto $B$ is anti-parallel to $B$, meaning it's magnitude points in the opposite direction. In this case the dot product $A \cdot B$ is negative. 

Don't think of it as projection. Think of it like, vector $B$ merely provides the direction and we want to know how much of $A$ points in that direction. 

Going to list the properties now... but they are the same already listed from the course book. 

pp. 311-312 has many problem to go over for the brave. 

### 12.4 The Cross Product
p. 312

The **cross product** is a non-zero vector perpendicular to vectors $A$ and $B$. Because there are infinite vector lengths perpendicular, we define the cross product vector, with a specific magnitude... in just a minute.

Apparently, it is useful to know what the **determinant** is. It's a linear algebra concept ...

If $A$ is a $2\times 2$ matrix like $\big(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\big)$, the determinant of $A$ is: 

$$
\det(A) = \det 
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix} = 
\begin{vmatrix}
a & b \\
c & d
\end{vmatrix} = ad - bc
$$

That turns a matrix into a single value. Well, it goes into several other concepts that I will save for the _linear algebra_ section, but includes a determinant of a $3 \times 3$ matrix and eventually becomes:

$$
\begin{align*}
	\begin{vmatrix}
	i & j & k \\
	a_1 & a_2 & a_3 \\
	b_1 & b_2 & b_3
	\end{vmatrix} &= 
(a_2b_3 - a_3-b_2)i - (a_1b_3-a_3b_1)j + (a_1b_2-a_2b_1)k \\
&= (a_2b_3 - a_3-b_2)i + (a_3b_1-a_1b_3)j + (a_1b_2-a_2b_1)k \\
&= \langle 
	a_2b_3 - a_3-b_2,\;a_3b_1-a_1b_3,\;a_1b_2-a_2b_1
	\rangle \\
&= A \times B 
\end{align*}
$$

So the cross product is the determinant of a $3 \times 3$ matrix. The cross product has nice properties like:

$$
\begin{align*}
|A \times B|^2 &= (a_2b_3-a_3b_1)^2 + (a_3b_1-a_1b_3)^2 + (a_1b_2-a_2b_1)^2 \\
&= +\;\text{A lot of factoring}\\
&= (a_1^2+a_2^2+a_3^2)(b_1^2+b_2^2+b_3^2) - (a_1b_1 + a_2b_2 + a_3b_3)^2 \\
&= |A|^2|B|^2-(A \cdot B)^2 \\
&= |A|^2|B|^2-|A|^2|B|^2 \cos^2(\theta)\\
&= |A|^2|B|^2(1-\cos^2(\theta))\\
&= |A|^2|B|^2\sin^2(\theta)\\
&\therefore \\
|A \times B| &= |A||B|\sin(\theta)
\end{align*}
$$

Because we have a factor of sine, if the angle between the vectors is 0, then the magnitude of the cross product is 0. 

Additionally, if we take two vectors and put them "tail to tail" so that they cast parallel vectors to form a _parallelogram_ but only for visual purposes, the area of the parallelogram is $\text{height} * \text{width} = |A|\sin(\theta) * |B|=|A \times B|$, the magnitude of the cross product. 

The direction of the cross product is determined by a simple rule called the _right hand rule_. The **right hand rule** basically means if you rotate the projected vector $A$ counter-clockwise to project onto $B$, then curling the fingers into the palm of your right hand, you should note your thumb points up, which is the direction of the vector. 

This means, because of direction, $A \times B \neq B \times A$. 

The course book didn't capture all of the properties. 

**Theorem 12.4.2**: if $\vec{u}$, $\vec{v}$, and $\vec{w}$ are all vectors and $c$ is just a real number, then the following:

$$
\begin{align*}
\vec{u} \times (\vec{v}+\vec{w}) &= \vec{u} \times \vec{v}+\vec{u} \times \vec{w}\\
(\vec{v}+\vec{w}) \times \vec{u} &= \vec{v} \times \vec{u}+\vec{w} \times \vec{u}\\
(c\vec{u}) \times \vec{v} &= c(\vec{u} \times \vec{v}) = \vec{u} \times (c\vec{v})\\
(\vec{u} \cdot (\vec{v} \times \vec{w})) &= (\vec{u} \times \vec{v}) \cdot \vec{w}\\
\vec{u} \times (\vec{v} \times \vec{w}) &= (\vec{u} \cdot \vec{w})\vec{v} - (\vec{u} \cdot \vec{v}) \vec{w}
\end{align*}
$$

That is it for now. Lots of practice problems on p. 316. 