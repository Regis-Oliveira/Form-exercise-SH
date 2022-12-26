import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  placeholder: string;
}

export default function Input({ name, placeholder, ...rest }: Props) {
  console.log("name:", name);
  
  return (
    <div className="flex flex-col">
      <label className='uppercase text-xs font-bold font-sans text-gray-900 
        mb-1 mt-4'>
          {name}
        </label>
      <input
        className='bg-gray-100 py-1 pl-3 text-gray-700 rounded-md border border-gray-200
        active:border-gray-500 active:bg-gray-100 focus:outline-gray-300'
        type="text"
        placeholder={placeholder}
        // {...register('lastName')}
        {...rest}
      />
    </div>
  )
}