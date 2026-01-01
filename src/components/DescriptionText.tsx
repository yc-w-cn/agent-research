interface DescriptionTextProps {
  text: string;
}

export default function DescriptionText({ text }: DescriptionTextProps) {
  const paragraphs = text.split('\n').filter((p) => p.trim());

  return (
    <div className="space-y-2">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
