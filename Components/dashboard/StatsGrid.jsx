import React from "react";
import { Zap, Car, TrendingUp, Star, MapPin, Leaf } from "lucide-react";

export default function StatsGrid({ 
  tokens = 0, 
  totalRides = 0, 
  currentStreak = 0, 
  trustScore = 5.0, 
  rtoCount = 0, 
  co2Saved = 0 
}) {
  const stats = [
    {
      title: "Tokens Earned",
      value: tokens.toLocaleString(),
      icon: Zap,
      color: "text-yellow-400",
      bgColor: "from-yellow-400/20 to-orange-500/20"
    },
    {
      title: "Total Rides",
      value: totalRides.toLocaleString(),
      icon: Car,
      color: "text-blue-400",
      bgColor: "from-blue-400/20 to-blue-600/20"
    },
    {
      title: "Current Streak",
      value: `${currentStreak} days`,
      icon: TrendingUp,
      color: "text-green-400",
      bgColor: "from-green-400/20 to-green-600/20"
    },
    {
      title: "Trust Score",
      value: trustScore.toFixed(1),
      icon: Star,
      color: "text-purple-400",
      bgColor: "from-purple-400/20 to-purple-600/20"
    },
    {
      title: "RTO Plates",
      value: rtoCount.toLocaleString(),
      icon: MapPin,
      color: "text-cyan-400",
      bgColor: "from-cyan-400/20 to-cyan-600/20"
    },
    {
      title: "CO₂ Saved",
      value: `${co2Saved}kg`,
      icon: Leaf,
      color: "text-emerald-400",
      bgColor: "from-emerald-400/20 to-emerald-600/20"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="glass rounded-3xl p-6 text-center glass-hover">
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.bgColor} flex items-center justify-center mx-auto mb-3`}>
            <stat.icon className={`w-6 h-6 ${stat.color}`} />
          </div>
          <p className="text-2xl font-bold text-white mb-1 text-glow">{stat.value}</p>
          <p className="text-slate-400 text-sm">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}