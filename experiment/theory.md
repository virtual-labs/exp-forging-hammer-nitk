Forging is a manufacturing process which involves shaping metals using localized compressive forces i.e., blows are delivered by hammers on the billet. 

The governing differential equation are,

$m_1 \ddot{x}_1(t) + (k_1 + k_2) x_1(t) - k_2 x_2(t) = 0$   
$m_2 \ddot{x}_2(t) - k_2 x_1(t) + k_2 x_2(t) = 0$

Writing in matrix form,

$\begin{bmatrix} m_1 & 0 \\ 0 & m_2 \end{bmatrix} \begin{Bmatrix} \ddot{x}_1(t) \\ \ddot{x}_2(t) \end{Bmatrix} + \begin{bmatrix} k_1 + k_2 & -k_2 \\ -k_2 & k_2 \end{bmatrix} \begin{Bmatrix} x_1(t) \\ x_2(t) \end{Bmatrix} = \begin{Bmatrix} 0 \\ 0 \end{Bmatrix}$

Where,

$x_1(t) = X_1 \cos(\omega t + \phi)$  
$x_2(t) = X_2 \cos(\omega t + \phi)$

Substituting this and writing in the matrix form,

$\begin{bmatrix} -m_1 \omega^2 + k_1 + k_2 & -k_2 \\ -k_2 & -m_2 \omega^2 + k_2 \end{bmatrix} \begin{Bmatrix} X_1 \\ X_2 \end{Bmatrix} = \begin{Bmatrix} 0 \\ 0 \end{Bmatrix}$  

To obtain the solution the determminant of the coefficient of $X_1$ and $X_2$ must be zero,

$(m_1 m_2) \omega^4 - \{(k_1 + k_2) m_2 + k_2 m_1\} \omega^2 + (k_1 + k_2) k_2 - k_2^2 = 0$

where, $\omega_1$ and $\omega_2$ are roots of the equations,

$\omega_1^2, \omega_2^2 = \frac{1}{2} \left\{ \frac{(k_1 + k_2) m_2 + k_2 m_1}{m_1 m_2} \right\} \mp \frac{1}{2} \left\{ \left( \frac{(k_1 + k_2) m_2 + k_2 m_1}{m_1 m_2} \right)^2 - 4 \frac{(k_1 + k_2) k_2 - k_2^2}{m_1 m_2} \right\}^{1/2}$  

The mode shape,

For the first mode $X_1 = \begin{Bmatrix} X_1^{(1)} \\ X_2^{(1)} \end{Bmatrix} = X_1^{(1)} \begin{Bmatrix} 1 \\ r_1 \end{Bmatrix} \quad \text{where } r_1 = \frac{X_2^{(1)}}{X_1^{(1)}}$

Fot the second mode $X_2 = \begin{Bmatrix} X_1^{(2)} \\ X_2^{(2)} \end{Bmatrix} = X_1^{(2)} \begin{Bmatrix} 1 \\ r_2 \end{Bmatrix} \quad \text{where } r_2 = \frac{X_2^{(2)}}{X_1^{(2)}}$

The general form of equation of motion of $m_1$ and $m_2$ are,

$x_1 = X_1^{(1)} \cos(\omega_1 t + \phi_1) + X_1^{(2)} \cos(\omega_2 t + \phi_2) $  
$x_2 = r_1 X_1^{(1)} \cos(\omega_1 t + \phi_1) + r_2 X_1^{(2)} \cos(\omega_2 t + \phi_2)$ 

The initial conditions (at $t = 0$) are,

$x_1 = 0 \quad \dot{x}_1 = 0$  
$x_2 = 0 \quad \dot{x}_2 = 0$

Based on the initial conditions, $X_1^{(1)}$, $X_1^{(2)}$, $\phi_1$ and $\phi_2$ can be obtained.



<!-- ![Alt text](images/4.png) -->

<!-- ![Alt text](images/5.png) -->