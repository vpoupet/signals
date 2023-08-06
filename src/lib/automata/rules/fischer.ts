export default `\
# Fischer's prime numbers sieve cellular automaton

Init:
  Wall
  0/2.Right
  0/0.Half
Wall:
  Wall
Right:
  -Half: 1.Right
  Half: 1.Wall 0/2.Left 1.Half
Half:
  -Right: 1/3.Half
Left:
  -Wall: -1.Left
  Wall: 1.Right
  0/0.BounceLeft
BounceLeft:
  0/0.Mark
  -Wall: -1.BounceLeft
  +Wall: +1.BounceRight
BounceRight:
  -Wall: 1.BounceRight
  Wall: -1.BounceLeft
Mark:
  -1.Mark
`;