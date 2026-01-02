interface GridCardProps {
  title: string;
  description: string;
  color: string;
  onClick?: () => void;
}

export function GridCard({ title, description, color, onClick }: GridCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-purple-100/50 text-left"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="relative p-4">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} mb-3 flex items-center justify-center shadow-lg`}>
          <div className="w-5 h-5 bg-white rounded opacity-90" />
        </div>
        
        <h3 className="text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </button>
  );
}