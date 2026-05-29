interface InputScreenProps {
  onSubmit: (text: string) => void;
}

export default function InputScreen({ onSubmit }: InputScreenProps) {
  return (
    <div className="size-full flex items-center justify-center">
      <p className="text-gray-500">Input screen placeholder</p>
    </div>
  );
}
