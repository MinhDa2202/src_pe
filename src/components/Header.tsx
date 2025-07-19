'use client';

import { useSession, signOut } from 'next-auth/react';
import { Moon, Sun, LogOut, User, Plus, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import Link from 'next/link';

interface HeaderProps {
  onCreatePost?: () => void;
}

export default function Header({ onCreatePost }: HeaderProps) {
  const { data: session } = useSession();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-xl text-foreground">
              PostManager
            </h1>
            <p className="text-xs text-muted-foreground -mt-1">Quản lý bài đăng thông minh</p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full hover:bg-accent transition-colors"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5 text-muted-foreground" />
            ) : (
              <Sun className="h-5 w-5 text-yellow-500" />
            )}
          </Button>

          {session ? (
            <div className="flex items-center space-x-3">
              {/* Create Post Button */}
              {onCreatePost && (
                <Button 
                  onClick={onCreatePost} 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-full px-4 py-2"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Tạo Bài Đăng</span>
                  <span className="sm:hidden">Tạo</span>
                </Button>
              )}

              {/* User Info */}
              <div className="flex items-center space-x-3 bg-muted rounded-full px-4 py-2 border border-border">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-foreground truncate max-w-32">
                    {session.user?.email}
                  </p>
                  <p className="text-xs text-muted-foreground">Đã đăng nhập</p>
                </div>
              </div>

              {/* Logout Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => signOut()}
                className="w-10 h-10 rounded-full text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-colors"
                title="Đăng xuất"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Link href="/auth/signin">
                <Button 
                  variant="ghost" 
                  className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-full px-4 py-2 transition-colors"
                >
                  Đăng Nhập
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-full px-4 py-2">
                  Đăng Ký
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}