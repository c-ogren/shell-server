type PongType = {
  data: string;
};

export const getTestMessage = (): PongType => {
  return { data: "pong" };
};
