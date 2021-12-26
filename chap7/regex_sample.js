const text = "t_o_dです。26歳です。5歳上の兄がいます。"

const result = text.matchAll(/[0-9]{1,2}歳/g)

console.log(result)