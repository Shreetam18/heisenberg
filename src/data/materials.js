const base = import.meta.env.BASE_URL

export const materials = {
  lecture: [
    {
      name: 'Boolean Algebra',
      path: `${base}lecture/Boolean Algebra.pdf`,
    },
    {
      name: 'CMOS Logic Circuits and Family',
      path: `${base}lecture/CMOS Logic Circuits and Family.pdf`,
    },
    {
      name: 'Introduction to TTL and Its Family',
      path: `${base}lecture/Introduction to TTL and Its Family.pdf`,
    },
    {
      name: 'Number Systems',
      path: `${base}lecture/Number Systems.pdf`,
    },
    {
      name: 'Semiconductors',
      path: `${base}lecture/Semiconductors.pdf`,
    },
  ],

  experiments: [
    {
      name: 'Experiment No 1 - Verification of De-Morgans Theorem',
      path: `${base}experiments/Experiment No 1 - Verification of De-Morgans Theorem.pdf`,
    },
    {
      name: 'Experiment No 2 - Universal NAND NOR',
      path: `${base}experiments/Experiment No 2 Universal NAND NOR.pdf`,
    },
    {
      name: 'Experiment No 3 - Half Adder Using Basic Gates',
      path: `${base}experiments/Experiment no 3 half adder using basic gates.pdf`,
    },
    {
      name: 'Experiment No 4 - Half Adder Using Universal Logic Gates Only',
      path: `${base}experiments/Experiment no 4 half adder using Universal logic gates only.pdf`,
    },
    {
      name: 'Experiment No 5 - Half Subtractor Using Universal Logic Gates Only',
      path: `${base}experiments/Experiment no 5 half subtractor using Universal logic gates only.pdf`,
    },
    {
      name: 'Experiment No 6 - Full Adder Using Logic Gates',
      path: `${base}experiments/Experiment no 6 full adder using logic gates.pdf`,
    },
    {
      name: 'Experiment No 7 - Construction of 4 to 1 Multiplexer Using Basic Logic Gates',
      path: `${base}experiments/Experiment no 7 Construction of 4 to 1 multiplexer using basic logic gates.pdf`,
    },
    {
      name: 'Experiment No 8 - Realization of Half Adder Using 4 to 1 Multiplexer 74153',
      path: `${base}experiments/Experiment no 8 realization of half adder using 4 to 1 multiplexer 74153.pdf`,
    },
    {
      name: 'Experiment No 9 - Realization of Full Adder Using 4 to 1 Multiplexer 74153',
      path: `${base}experiments/Experiment no 9 realization of full adder using 4 to 1 multiplexer 74153.pdf`,
    },
    {
      name: 'Experiment No 10 - Realization of OR, NOT and AND Functions Using 4 to 1 Multiplexer',
      path: `${base}experiments/ex10 Realization of OR, NOT and AND functions uisng 4 to 1 Multiplexer..pdf`,
    },
    {
      name: 'Experiment No 11 - Decoder Construction Using Basic Logic Gates',
      path: `${base}experiments/ex 11 Decoder construction using basic logic gates.pdf`,
    },
  ],

  books: [
    {
      name: 'Digital Systems: Principles and Applications',
      path: `${base}books/Digital Systems Principles and Applications, 12th Edition by Neal S. Widmer, Gregory L. Moss, Ronald J. Tocci.pdf`,
    },
  ],
}