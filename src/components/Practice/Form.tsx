/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form";

// type Input = {
//   required: string;
//   maxLength: string;
//   maxNumber: number;
// };

// export const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Input>({
//     criteriaMode: "all",
//     shouldFocusError: false,
//   });
//   const onSubmit: SubmitHandler<Input> = (data) => console.log(data);
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* trueの場合必須 */}
//       <br />
//       <input {...register("required", { required: true })} />
//       {errors.required && "文字が入力されていません"}
//       <br />
//       {/* 5文字以上の文字列 */}
//       <br />
//       <input {...register("maxLength", { maxLength: 5 })} />
//       {errors.maxLength && "5文字以上が入力されています"}
//       <br />
//       10以内ならOK
//       <br />
//       <input type="number" {...register("maxNumber", { max: 10 })} />
//       {errors.maxNumber && "10以上の数字が入力されています"}
//       <br />
//       <input type="submit" />
//     </form>
//   );
// };
