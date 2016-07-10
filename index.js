
function padL (l, s)
{
  while (s.length < l)
    s = "0" + s;

  return s;
}

function binaryFromRule (i)
{
  return padL(8, i.toString(2));
}

function outcomes (r)
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

function survival (st, i, r)
{
  var pattern = "" + (st[i - 1] || 0) + st[i] + (st[i + 1] || 0);
  var outcome = outcomes(r);

  return outcome[pattern];
}

function compute (st, r)
{
  var newState = [];

  for (var i = 0; i < st.length; i++)
    newState[i] = survival(st, i, binaryFromRule(r));

  return newState;
}
