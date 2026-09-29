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
  ],

  books: [
    {
      name: 'Digital Systems: Principles and Applications',
      path: `${base}books/Digital Systems Principles and Applications, 12th Edition by Neal S. Widmer, Gregory L. Moss, Ronald J. Tocci.pdf`,
    },
  ],

}