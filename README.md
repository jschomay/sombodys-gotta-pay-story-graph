# "Somebody's Gotta Pay" story graph

Everything in the story fits together, this shows how.

This works on 3 levels:

1. Building out the story
2. Powering the game engine
3. Basis for UI/mechanics

![murder board](https://i.pinimg.com/736x/65/1a/4f/651a4fdadd4c9509c852d35346e462bd--gangster-aesthetic-asoue-aesthetic.jpg)

## Design

The graph can show all relationships. However, only nodes that are _leads_ and edges
that are _actions_ are relevant to the game play. The player will begin with a blank
board. As story is revealed, leads appear on the board. Each lead can be followed
by choosing an action, which will trigger more story which can trigger more leads
and actions (as well as make previous actions unavailable).
