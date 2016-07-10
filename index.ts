
type State = number[] | string[];
interface Outcomes { [x : string] : string; };

function padLeft (l : number, s : string, t : string) : string
{
  while (s.length < l)
    s = t + s;

  return s;
}

function binaryFromRule (i : number) : string
{
  return padLeft(8, i.toString(2), "0");
}

function outcomes (r : string) : Outcomes
{
  return { "111" : r[0]
         , "110" : r[1]
         , "101" : r[2]
         , "100" : r[3]
         , "011" : r[4]
         , "010" : r[5]
         , "001" : r[6]
         , "000" : r[7]
         };
}

function survival (st : State, i : number, r : string) : string
{
  var pattern = "" + (st[i - 1] || 0) + st[i] + (st[i + 1] || 0);

  return outcomes(r)[pattern];
}

function compute (st : State, r : number) : State
{
  var newState = [];

  for (var i = 0; i < st.length; i++)
    newState[i] = survival(st, i, binaryFromRule(r));

  return newState;
}

export { compute }
