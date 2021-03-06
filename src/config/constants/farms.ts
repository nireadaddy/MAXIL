import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 251,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  {
    pid: 343,
    lpSymbol: 'ODDZ-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3c2c77353E2F6AC1578807b6b2336Bf3a3CbB014',
    },
    token: tokens.oddz,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 409,
    lpSymbol: 'ETH-USDC LP',
    lpAddresses: {
      97: '',
      56: '0xEa26B78255Df2bBC31C1eBf60010D78670185bD0',
    },
    token: tokens.eth,
    quoteToken: tokens.usdc,
  },
  {
    pid: 408,
    lpSymbol: 'BTCB-ETH LP',
    lpAddresses: {
      97: '',
      56: '0xD171B26E4484402de70e3Ea256bE5A2630d7e88D',
    },
    token: tokens.btcb,
    quoteToken: tokens.eth,
  },
  {
    pid: 347,
    lpSymbol: 'BONDLY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xb8b4383B49d451BBeA63BC4421466E1086da6f18',
    },
    token: tokens.bondly,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 407,
    lpSymbol: 'MARSH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x222f93187f15f354d41ff6a7703ef7e18cdd5103',
    },
    token: tokens.marsh,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 406,
    lpSymbol: 'BORING-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xDfA808Da5CFB9ABA5Fb3748FF85888F79174F378',
    },
    token: tokens.boring,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 405,
    lpSymbol: 'MBOX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8FA59693458289914dB0097F5F366d771B7a7C3F',
    },
    token: tokens.mbox,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 404,
    lpSymbol: 'ATA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xef7767677867552cfa699148b96a03358a9be779',
    },
    token: tokens.ata,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 403,
    lpSymbol: 'MX-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x41f049d990d38305504631c9835f6f856bf1ba67',
    },
    token: tokens.mx,
    quoteToken: tokens.busd,
  },
  {
    pid: 402,
    lpSymbol: 'bCFX-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xA0387eBeA6be90849c2261b911fBBD52B4C9eAC4',
    },
    token: tokens.bcfx,
    quoteToken: tokens.busd,
  },
  {
    pid: 401,
    lpSymbol: 'QKC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x8853e3309a31583ea438f7704681f46f0d4d909b',
    },
    token: tokens.qkc,
    quoteToken: tokens.busd,
  },
  {
    pid: 400,
    lpSymbol: 'KTN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x48028de4a9b0d3d91180333d796021ec7757ba1b',
    },
    token: tokens.ktn,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 399,
    lpSymbol: 'MTRG-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x4dcA4D427511bC327639b222DA18FA5e334F686F',
    },
    token: tokens.mtrg,
    quoteToken: tokens.busd,
  },
  {
    pid: 398,
    lpSymbol: 'SWG-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x226af4e918fcf3e62e5eeec867a3e78aaa7bb01d',
    },
    token: tokens.swg,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 397,
    lpSymbol: 'TUSD-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2e28b9b74d6d99d4697e913b82b41ef1cac51c6c',
    },
    token: tokens.tusd,
    quoteToken: tokens.busd,
  },
  {
    pid: 396,
    lpSymbol: 'VRT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xef5212ada83ec2cc105c409df10b8806d20e3b35',
    },
    token: tokens.vrt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 395,
    lpSymbol: 'EZ-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x51bf99bbae59b67e5ce2fa9c17b683384773f8b3',
    },
    token: tokens.ez,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 394,
    lpSymbol: 'KALM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc74f7243766269dec5b85b0ef4af186e909c1b06',
    },
    token: tokens.kalm,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 393,
    lpSymbol: 'pOPEN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1090c996fd1490d15dd7906322ee676a5cc3cf82',
    },
    token: tokens.popen,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 335,
    lpSymbol: 'LIEN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa4963B38b271c0D714593063497Fc786Fa4029Ce',
    },
    token: tokens.lien,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 392,
    lpSymbol: 'WELL-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1d94cb25895abd6ccfef863c53372bb462aa6b86',
    },
    token: tokens.well,
    quoteToken: tokens.busd,
  },
  {
    pid: 391,
    lpSymbol: 'DERI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xdc7188ac11e124b1fa650b73ba88bf615ef15256',
    },
    token: tokens.deri,
    quoteToken: tokens.busd,
  },
  {
    pid: 390,
    lpSymbol: 'CHR-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x6045931e511ef7e53a4a817f971e0ca28c758809',
    },
    token: tokens.chr,
    quoteToken: tokens.busd,
  },
  {
    pid: 389,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },
  {
    pid: 388,
    lpSymbol: 'CYC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xecf30fbecfa642012f54212a3be92eef1e48edac',
    },
    token: tokens.cyc,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 387,
    lpSymbol: 'XEND-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xcecfc2789af72ed151589a96a59f3a1abc65c3b5',
    },
    token: tokens.xend,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 296,
    lpSymbol: 'HGET-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF74ee1e10e097dc326a2ad004F9Cc95CB71088d3',
    },
    token: tokens.hget,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 386,
    lpSymbol: 'HOTCROSS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xf23bad605e94de0e3b60c9718a43a94a5af43915',
    },
    token: tokens.hotcross,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 385,
    lpSymbol: 'RFOX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8e04b3972b5c25766c681dfd30a8a1cbf6dcc8c1',
    },
    token: tokens.rfox,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 384,
    lpSymbol: 'WMASS-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xec95ff6281c3ad8e27372fa6675eb337640b8e5e',
    },
    token: tokens.wmass,
    quoteToken: tokens.busd,
  },
  {
    pid: 383,
    lpSymbol: 'UBXT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x8d3ff27d2ad6a9556b7c4f82f4d602d20114bc90',
    },
    token: tokens.ubxt,
    quoteToken: tokens.busd,
  },
  {
    pid: 381,
    lpSymbol: 'BTR-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xbc7ac609fa730239190a70952e64ee1dfc2530ac',
    },
    token: tokens.btr,
    quoteToken: tokens.busd,
  },
  {
    pid: 380,
    lpSymbol: '??DOGE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2030845Ce7d4224523fd2F03Ca20Afe4aAD1D890',
    },
    token: tokens.??doge,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 379,
    lpSymbol: 'PMON-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xcdb0016d97fd0e7ec2c3b78aa4786cbd8e19c14c',
    },
    token: tokens.pmon,
    quoteToken: tokens.busd,
  },
  {
    pid: 378,
    lpSymbol: 'ONE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x4d057f769d930eafd597b49d6fb2e1009a73a702',
    },
    token: tokens.one,
    quoteToken: tokens.busd,
  },
  {
    pid: 377,
    lpSymbol: 'FINE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc309a6d2f1537922e06f15aa2eb21caa1b2eedb6',
    },
    token: tokens.fine,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 376,
    lpSymbol: 'DOGE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xac109c8025f272414fd9e2faa805a583708a017f',
    },
    token: tokens.doge,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 310,
    lpSymbol: 'bMXX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc20A92a1424b29b78DFaF92FD35D4cf8A06419B4',
    },
    token: tokens.bmxx,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 375,
    lpSymbol: 'OIN-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x6a00e41561ac36a78dba1d09091b0f00c4e53724',
    },
    token: tokens.oin,
    quoteToken: tokens.busd,
  },
  {
    pid: 374,
    lpSymbol: 'HYFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0716725d78081a9e0e1ff81516f5415b399e274d',
    },
    token: tokens.hyfi,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 373,
    lpSymbol: 'KUN-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xea61020e5a128d2bec67d48f7cfbe3408db7e391',
    },
    token: tokens.kun,
    quoteToken: tokens.busd,
  },
  {
    pid: 372,
    lpSymbol: 'KUN-QSD LP',
    lpAddresses: {
      97: '',
      56: '0x4eafbf68a2d50291ffd163d4e00ad0f040aae707',
    },
    token: tokens.kun,
    quoteToken: tokens.qsd,
  },
  {
    pid: 371,
    lpSymbol: 'MATH-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xb7cada0f120ca46745a024e6b9fe907b2fe10cf3',
    },
    token: tokens.math,
    quoteToken: tokens.busd,
  },
  {
    pid: 370,
    lpSymbol: 'mCOIN-UST LP',
    lpAddresses: {
      97: '',
      56: '0xbcf01a42f6bc42f3cfe81b05519565044d65d22a',
    },
    token: tokens.mcoin,
    quoteToken: tokens.ust,
  },
  {
    pid: 369,
    lpSymbol: 'WIN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x894bd57afd8efc93d9171cb585d11d0977557425',
    },
    token: tokens.win,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 368,
    lpSymbol: 'TRX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3cd338c3bb249b6b3c55799f85a589febbbff9dd',
    },
    token: tokens.trx,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 367,
    lpSymbol: 'BTT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x946696344e7d4346b223e1cf77035a76690d6a73',
    },
    token: tokens.btt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 366,
    lpSymbol: 'PNT-pBTC LP',
    lpAddresses: {
      97: '',
      56: '0xdaa89d335926628367b47852989bb22ee62ca5de',
    },
    token: tokens.pnt,
    quoteToken: tokens.pbtc,
  },
  {
    pid: 311,
    lpSymbol: 'xMARK-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xAa40f1AC20AAFcFEE8595Da606D78C503C7e70A3',
    },
    token: tokens.xmark,
    quoteToken: tokens.busd,
  },
  {
    pid: 365,
    lpSymbol: 'BTCB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xf45cd219aef8618a92baa7ad848364a158a24f33',
    },
    token: tokens.btcb,
    quoteToken: tokens.busd,
  },
  {
    pid: 364,
    lpSymbol: 'LMT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8271d7eafeeb8f24d7c9fe1acce2ae20611972e5',
    },
    token: tokens.lmt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 363,
    lpSymbol: 'DFD-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x029d66f9c0469450b7b4834b8ddc6a1118cec3e1',
    },
    token: tokens.dfd,
    quoteToken: tokens.busd,
  },
  {
    pid: 362,
    lpSymbol: 'ALPACA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7752e1fa9f3a2e860856458517008558deb989e3',
    },
    token: tokens.alpaca,
    quoteToken: tokens.busd,
  },
  {
    pid: 361,
    lpSymbol: '??BTC-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0x8046fa66753928F35f7Db23ae0188ee6743C2FBA',
    },
    token: tokens.??btc,
    quoteToken: tokens.btcb,
  },
  {
    pid: 304,
    lpSymbol: 'SWINGBY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4Fd6D315bEf387fAD2322fbc64368fC443F0886D',
    },
    token: tokens.swingby,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 360,
    lpSymbol: 'XED-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa7A0b605343dF36B748FF4B5f7578b3F2D0651CE',
    },
    token: tokens.xed,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 359,
    lpSymbol: 'HAKKA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2C624C9Ecf16Cb81aB85cC2C0B0c5e12A09AFDa6',
    },
    token: tokens.hakka,
    quoteToken: tokens.busd,
  },
  {
    pid: 358,
    lpSymbol: 'CGG-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0604471c532F9fEBAD3E37190B667f44BD0894b3',
    },
    token: tokens.cgg,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 357,
    lpSymbol: 'SUTER-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2d5DB889392Bc3c8B023A8631ca230A033eEA1B8',
    },
    token: tokens.suter,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 356,
    lpSymbol: 'bROOBEE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x950FD020F8E4B8C57285EC7020b7a204348dadFa',
    },
    token: tokens.broobee,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 355,
    lpSymbol: 'HZN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xDc9a574b9B341D4a98cE29005b614e1E27430E74',
    },
    token: tokens.hzn,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 354,
    lpSymbol: 'ALPA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4cC442220BE1cE560C1f2573f8CA8f460B3E4172',
    },
    token: tokens.alpa,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 353,
    lpSymbol: 'PERL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x61010e6CbA3b56ba47E9dFd56Da682daCFe76131',
    },
    token: tokens.perl,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 352,
    lpSymbol: 'TLM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xE6b421a4408c82381b226Ab5B6F8C4b639044359',
    },
    token: tokens.tlm,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 351,
    lpSymbol: 'JGN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7275278C94b5e20708380561C4Af98F38dDC6374',
    },
    token: tokens.jgn,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 350,
    lpSymbol: 'EPS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xddE420cbB3794ebD8FFC3Ac69F9c78e5d1411870',
    },
    token: tokens.eps,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 349,
    lpSymbol: 'ARPA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9730c791743300E9f984C9264395ce705A55Da7c',
    },
    token: tokens.arpa,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 348,
    lpSymbol: 'ITAM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd02DA76c813b9cd4516eD50442923E625f90228f',
    },
    token: tokens.itam,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 346,
    lpSymbol: 'TKO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xFFd4B200d3C77A0B691B5562D804b3bd54294e6e',
    },
    token: tokens.tko,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 345,
    lpSymbol: 'APYS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x510b29a93ebf098f3fC24A16541aAA0114D07056',
    },
    token: tokens.apys,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 344,
    lpSymbol: 'HOO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3e42C1f7239231E3752B507764445dd8e6A570d5',
    },
    token: tokens.hoo,
    quoteToken: tokens.busd,
  },
  {
    pid: 342,
    lpSymbol: 'EASY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x20c6De8983Fb2D641c55004646aEF40b4EA66E18',
    },
    token: tokens.easy,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 341,
    lpSymbol: 'NRV-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xE482249Cd295C0d1e9D2baAEE71e66de21024C68',
    },
    token: tokens.nrv,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 340,
    lpSymbol: 'DEGO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF1Ec67fA1881796BFf63Db3E1A301cE9cb787Fad',
    },
    token: tokens.dego,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 339,
    lpSymbol: 'GUM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x28Ea5894D4DBbE90bB58eE3BAB2869387d711c87',
    },
    token: tokens.gum,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 338,
    lpSymbol: 'pBTC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0362ba706DFE8ED12Ec1470aB171d8Dcb1C72B8D',
    },
    token: tokens.pbtc,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 337,
    lpSymbol: 'DFT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x24d3B0eD4C444A4f6882d527cBF67aDc8c026582',
    },
    token: tokens.dft,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 336,
    lpSymbol: 'SWTH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x123D475E13aA54A43a7421d94CAa4459dA021c77',
    },
    token: tokens.swth,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 334,
    lpSymbol: 'ZIL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6A97867a4b7Eb7646ffB1F359ad582e9903aa1C2',
    },
    token: tokens.zil,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 333,
    lpSymbol: 'pCWS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6615CE60D71513aA4849269dD63821D324A23F8C',
    },
    token: tokens.pcws,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 332,
    lpSymbol: 'bBADGER-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0x5A58609dA96469E9dEf3fE344bC39B00d18eb9A5',
    },
    token: tokens.bbadger,
    quoteToken: tokens.btcb,
  },
  {
    pid: 331,
    lpSymbol: 'bDIGG-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0x81d776C90c89B8d51E9497D58338933127e2fA80',
    },
    token: tokens.bdigg,
    quoteToken: tokens.btcb,
  },
  {
    pid: 330,
    lpSymbol: 'LTO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa5Bb44c6F5fD9B836E5a654c8AbbCCc96A15deE5',
    },
    token: tokens.lto,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 329,
    lpSymbol: 'MIR-UST LP',
    lpAddresses: {
      97: '',
      56: '0x89666d026696660e93Bf6edf57B71A68615768B7',
    },
    token: tokens.mir,
    quoteToken: tokens.ust,
  },
  {
    pid: 328,
    lpSymbol: 'TRADE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8F6baf368E7A4f6e2C9c995f22702d5e654A0237',
    },
    token: tokens.trade,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 327,
    lpSymbol: 'DUSK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x678EDb8B268e73dB57b7694c163e1dc296b6e219',
    },
    token: tokens.dusk,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 326,
    lpSymbol: 'BIFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3f1A9f3D9aaD8bD339eD4853F345d2eF89fbfE0c',
    },
    token: tokens.bifi,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 325,
    lpSymbol: 'TXL-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1434BB50196A0C7eA825940b1DFd8aAd25d79817',
    },
    token: tokens.txl,
    quoteToken: tokens.busd,
  },
  {
    pid: 324,
    lpSymbol: 'COS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xe98585bBb2dc81854fF100A3d9D7B0F53E0dafEd',
    },
    token: tokens.cos,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 323,
    lpSymbol: 'BUNNY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5aFEf8567414F29f0f927A0F2787b188624c10E2',
    },
    token: tokens.bunny,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 322,
    lpSymbol: 'ALICE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xcAD7019D6d84a3294b0494aEF02e73BD0f2572Eb',
    },
    token: tokens.alice,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 321,
    lpSymbol: 'FOR-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xE60B4e87645093A42fa9dcC5d0C8Df6E67f1f9d2',
    },
    token: tokens.for,
    quoteToken: tokens.busd,
  },
  {
    pid: 320,
    lpSymbol: 'BUX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x222C3CbB89647bF77822435Bd4c234A04272A77A',
    },
    token: tokens.bux,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 319,
    lpSymbol: 'NULS-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x853784B7BDe87d858555715c0123374242db7943',
    },
    token: tokens.nuls,
    quoteToken: tokens.busd,
  },
  {
    pid: 318,
    lpSymbol: 'BELT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF3Bc6FC080ffCC30d93dF48BFA2aA14b869554bb',
    },
    token: tokens.belt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 317,
    lpSymbol: 'RAMP-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xE834bf723f5bDff34a5D1129F3c31Ea4787Bc76a',
    },
    token: tokens.ramp,
    quoteToken: tokens.busd,
  },
  {
    pid: 316,
    lpSymbol: 'BFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x153Ad7d25B0b810497483d0cEE8AF42Fc533FeC8',
    },
    token: tokens.bfi,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 315,
    lpSymbol: 'DEXE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3578B1f9BCE98D2F4D293b422d8850fdf48B1f21',
    },
    token: tokens.dexe,
    quoteToken: tokens.busd,
  },
  {
    pid: 314,
    lpSymbol: 'BEL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x69DEE989c30b5fFe40867f5FC14F00E4bCE7B681',
    },
    token: tokens.bel,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 313,
    lpSymbol: 'TPT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x6D0c831254221ba121fB53fb44Df289A6558867d',
    },
    token: tokens.tpt,
    quoteToken: tokens.busd,
  },
  {
    pid: 312,
    lpSymbol: 'WATCH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x13321AcfF4A27f3d2bcA64b8bEaC6e5FdAAAf12C',
    },
    token: tokens.watch,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 309,
    lpSymbol: 'IOTX-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc13aA76AAc067c86aE38028019F414D731b3D86A',
    },
    token: tokens.iotx,
    quoteToken: tokens.busd,
  },
  {
    pid: 308,
    lpSymbol: 'BOR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xe094c686aD6cDda57b9564457F541FBF099B948A',
    },
    token: tokens.bor,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 307,
    lpSymbol: 'bOPEN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc7A9c2af263ebB86139Cca9349e49b17129Ba033',
    },
    token: tokens.bopen,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 306,
    lpSymbol: 'SUSHI-ETH LP',
    lpAddresses: {
      97: '',
      56: '0x16aFc4F2Ad82986bbE2a4525601F8199AB9c832D',
    },
    token: tokens.sushi,
    quoteToken: tokens.eth,
  },
  {
    pid: 305,
    lpSymbol: 'DODO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xA9986Fcbdb23c2E8B11AB40102990a08f8E58f06',
    },
    token: tokens.dodo,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 303,
    lpSymbol: 'BRY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x21dD71aB78EDE3033c976948f769D506E4F489eE',
    },
    token: tokens.bry,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 302,
    lpSymbol: 'ZEE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8e799cB0737525CeB8A6C6Ad07f748535fF6377B',
    },
    token: tokens.zee,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 301,
    lpSymbol: 'SWGb-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x856f9AD94cA8680B899214Bb1EB3d235a3C33Afe',
    },
    token: tokens.swgb,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 300,
    lpSymbol: 'COMP-ETH LP',
    lpAddresses: {
      97: '',
      56: '0x37908620dEf1491Dd591b5a2d16022A33cDDA415',
    },
    token: tokens.comp,
    quoteToken: tokens.eth,
  },
  {
    pid: 299,
    lpSymbol: 'SFP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x942b294e59a8c47a0F7F20DF105B082710F7C305',
    },
    token: tokens.sfp,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 298,
    lpSymbol: 'LINA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xC5768c5371568Cf1114cddD52CAeD163A42626Ed',
    },
    token: tokens.lina,
    quoteToken: tokens.busd,
  },
  {
    pid: 297,
    lpSymbol: 'LIT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1F37d4226d23d09044B8005c127C0517BD7e94fD',
    },
    token: tokens.lit,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 295,
    lpSymbol: 'BDO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4288706624e3dD839b069216eB03B8B9819C10d2',
    },
    token: tokens.bdo,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 294,
    lpSymbol: 'EGLD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xcD68856b6E72E99b5eEaAE7d41Bb4A3b484c700D',
    },
    token: tokens.egld,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 293,
    lpSymbol: 'UST-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x05faf555522Fa3F93959F86B41A3808666093210',
    },
    token: tokens.ust,
    quoteToken: tokens.busd,
  },
  
]

export default farms
