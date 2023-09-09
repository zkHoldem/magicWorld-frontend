// import { arbitrumGoerli } from 'wagmi/dist/chains';
import { arbitrumGoerli } from "wagmi/chains";
import { mantaTest, khartes } from "./chains";

export const config = {
  [arbitrumGoerli.id]: {
    SHUFFLE: "0xc7DBe0744c1ADB37Fd74904639AD9d20294f449a",
    MagicWorld: "0x7A0959d2196258855e6AE4a7F8fCD432C474e270",
  },
  [mantaTest.id]: {
    SHUFFLE: "0x8F8a52Ee35A15F29c789b7a635aA78bC10628B87",
    MagicWorld: "0x308d4d5d797D5120A2a6B89899abDCe475A8c33D",
  },
  [khartes.id]: {
    SHUFFLE: "0xf0f47d24f4609bf19f365d69182b4C9674E40f88",
    MagicWorld: "0x851f84C12ea49C7D9Cb3ab1FFD02f3EA7BBB376F",
  },
};
