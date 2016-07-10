
type State = number[] | string[];

function padL (l : number, s : string) : string
{
  while (s.length < l)
    s = "0" + s;

  return s;
}

function binaryFromRule (i : number) : string
{
  return padL(8, i.toString(2));
}

function outcomes (r : string) : any
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

function survival (st : State, i : number, r : string) : number
{
  var pattern = "" + (st[i - 1] || 0) + st[i] + (st[i + 1] || 0);
  return +outcomes(r)[pattern];
}

function compute (st : State, r : number) : number[]
{
  var newState = [];

  for (var i = 0; i < st.length; i++)
    newState[i] = survival(st, i, binaryFromRule(r));

  return newState;
}

export { compute }
