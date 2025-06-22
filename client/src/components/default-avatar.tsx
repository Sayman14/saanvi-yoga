
import { User } from "lucide-react";

interface DefaultAvatarProps {
  size?: number;
  className?: string;
  initials?: string;
  name?: string;
}

export default function DefaultAvatar({ 
  size = 40, 
  className = "", 
  initials,
  name 
}: DefaultAvatarProps) {
  // Generate initials from name if provided
  const getInitials = (fullName?: string) => {
    if (initials) return initials;
    if (!fullName) return "";
    return fullName
      .split(" ")
      .map(word => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join("");
  };

  // Generate consistent color based on name
  const getAvatarColor = (text?: string) => {
    if (!text) return "bg-gradient-to-br from-gray-400 to-gray-600";
    
    const colors = [
      "bg-gradient-to-br from-blue-400 to-blue-600",
      "bg-gradient-to-br from-green-400 to-green-600", 
      "bg-gradient-to-br from-purple-400 to-purple-600",
      "bg-gradient-to-br from-pink-400 to-pink-600",
      "bg-gradient-to-br from-indigo-400 to-indigo-600",
      "bg-gradient-to-br from-orange-400 to-orange-600",
      "bg-gradient-to-br from-teal-400 to-teal-600",
      "bg-gradient-to-br from-red-400 to-red-600"
    ];
    
    const hash = text.split("").reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    return colors[Math.abs(hash) % colors.length];
  };

  const displayInitials = getInitials(name);
  const avatarColor = getAvatarColor(name || initials);

  return (
    <div 
      className={`rounded-full flex items-center justify-center text-white font-semibold shadow-lg ${avatarColor} ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.4 }}
    >
      {displayInitials ? (
        <span>{displayInitials}</span>
      ) : (
        <User size={size * 0.6} className="text-white" />
      )}
    </div>
  );
}
