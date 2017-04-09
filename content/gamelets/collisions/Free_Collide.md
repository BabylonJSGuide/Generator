---
PG_TITLE: Free Particles
---

# Free Particles

After considering the [issues](/gamelets/Issues.html) involved and slow [slow particles](/gamelets/Slow_Collide.html) we are now ready to consider **free particles**, ones that move with no restriction to their start position or velocity.

The velocity of a particle is its displacement per frame.


## Colliding with a Wall

Given a particle of radius r, at position p and velocity v in *frame n*, the particle will collide with a wall when it is travelling towards the wall in *frame n* and in *frame n+1* the centre of the particle, at p + v,  is within a distance r from the wall or is moving away from the wall.

For example consider a left hand wall, with plane parallel to the YZ plane, and a particle travelling towards it with velocity (dx, dy, dz), dx &lt; 0.

In *frame n*, the position of the particle is (x, y, z) and during the time between *frame n* and *frame n+1* it overlapped the wall. At *frame n+1*, the particle may still be overlapping the wall and its centre may be to the right or left of the wall or, it the particle may have gone beyond the wall completely. The 2D diagrams show the latter case but the calculations apply in all cases. Fig 16 indicates the particle passing through the wall.

![Fig 16](/img/collide18.jpg)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fig 16. 

The particle at *frame n+1*, is at position (x + dx, y + dy, z + dz)

Sometime between *frame n* and *frame n+1* the particle would just touch the wall as in Fig 17.

![Fig 17](/img/collide19.jpg)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fig 17. 

At this position let the displacement of the particle from its position in *frame n* be (dx<sub>1</sub>, dy<sub>1</sub>, dz<sub>1</sub>) and its displacement from this position to its position in *frame n+1* be (dx<sub>2</sub>, dy<sub>2</sub>, dz<sub>2</sub>). It follows that (dx, dy, dz) = (dx<sub>1</sub>, dy<sub>1</sub>, dz<sub>1</sub>) + (dx<sub>2</sub>, dy<sub>2</sub>, dz<sub>2</sub>), see Fig 18.

![Fig 18](/img/collide20.jpg)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fig 18. 

At the point of contact with this wall the component of velocity in the x direction would reverse and so the remaining x axis displacement before *frame n+1* would be -dx<sub>2</sub>, see Fig 19.

![Fig 19](/img/collide21.jpg)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fig 19. 

The particle velocity, after the collision is now (-dx, dy, dz). For *frame n+1*, we need the position of the particle to be at (x + dx<sub>1</sub> - dx<sub>2</sub> , y + dy, z + dz). Since before *frame n+1*, is displayed the velocity (-dx, dy, dz) will be added and so we need it position before this is done to be (x + dx<sub>1</sub> - dx<sub>2</sub> , y + dy, z + dz) - (-dx, dy, dz), see Fig 20.

![Fig 20](/img/collide22.jpg)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fig 20.

(x + dx<sub>1</sub> - dx<sub>2</sub> , y + dy, z + dz) - (-dx, dy, dz)

= (x + dx<sub>1</sub> - dx<sub>2</sub> + dx, y, z)

= (x + dx<sub>1</sub> - dx<sub>2</sub> + dx<sub>1</sub> + dx<sub>2</sub>, y, z) 

= (x + 2dx<sub>1</sub>, y, z)

Which is the reflection of the particlee at *frame n* in the plane parallel to the YZ plane through the centre of the particle, see Fig 21.

![Fig 21](/img/collide23.jpg)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fig 21.

This means after *frame n* is displayed the particle's position has to be reset as indicated.

## Colliding Particles

Much more complicated rules will be needed to determine the positions and velocities of colliding spheres. Fig 23 shows the movement of a red and green sphere over two frames when the collision is not detected, including the potential collision point and the component vectors perpendicular and tangential to the point of contact. Fig 24 shows the rearrangement of the component vectors and positions of the spheres when the collision is detected.

![Fig 22](/img/collide16.jpg)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fig 22.

![Fig 23](/img/collide17.jpg)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fig 24.