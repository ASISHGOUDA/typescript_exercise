//write a generic

function createArray<ElementType>(length: number, value: ElementType): Array<ElementType> {
  const result: ElementType[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

console.log(createArray<string>(3, "x"));