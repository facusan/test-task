const defaults = {
  publicAddress: "0xb701FdCc9Db05d5AD0d7B6aAbb42DBf09ec28Ad0",
  accountBalance: 3.405,
  ethPrice: 1700,
  pastTransactions: [
    {
      id: 1,
      date: new Date(-1),
      value: 3,
      to: "0xb701FdCc9Db05d5AD0d7B6aAbb42DBf09ec28Ad0",
      from: "0xb19181c403D451A1e161b305eb08DfD422ffd6DD",
    },
    {
      id: 2,
      date: new Date(-2),
      value: 2,
      to: "0xb19181c403D451A1e161b305eb08DfD422ffd6DD",
      from: "0xb701FdCc9Db05d5AD0d7B6aAbb42DBf09ec28Ad0",
    },
    {
      id: 3,
      date: new Date(-4),
      value: 3,
      from: "0xb19181c403D451A1e161b305eb08DfD422ffd6DD",
      to: "0xb701FdCc9Db05d5AD0d7B6aAbb42DBf09ec28Ad0",
    },
  ],
};

export default defaults;
