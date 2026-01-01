'use client';

import { useMemo } from 'react';

import { cn } from '@/lib/utils';

interface TabButtonProps {
  label: string;
  isActive: boolean;
  hasContent: boolean;
  isLast: boolean;
  isFirst: boolean;
  onClick: () => void;
}

export default function TabButton({
  label,
  isActive,
  hasContent,
  isLast,
  isFirst,
  onClick,
}: TabButtonProps) {
  const borderClasses = useMemo(() => {
    // 边框无缝原则：
    // 目标：激活的标签显示完整的四个边框，边框交叉的部分不能重叠
    // 1. 所有的边框除非激活状态，不显示右侧边框，除非是最后一个
    // 2. 激活的标签的右边框会需要和右侧的边框合并，所以需要移除右侧边框
    // 3. 显示标注显示的边框 border-l 或者 border-r
    // 4. 显示标注隐藏的边框 border-l-0 或者 border-r-0
    // 5. 直接返回最终确定的边框的 className 结果

    // 基础边框定义：上、下、左
    // 修改点：添加 relative 确保 z-index 生效，添加 transition 保证 hover 平滑
    const base = 'relative border-t border-b border-l transition-all';

    // 颜色定义：未激活时透明或浅色，激活时突出
    // 修改点：hover 时提升 z-index 到 10，isActive 提升到 20，确保遮盖相邻边框
    const colors = isActive
      ? 'border-zinc-400 bg-white z-20'
      : 'border-zinc-200 bg-gray-50 hover:bg-white hover:border-zinc-400 hover:z-10';

    // 1. 所有的边框除非激活状态，不显示右侧边框，除非是最后一个
    // 2. 激活的标签的右边框会需要和右侧的边框合并，所以需要移除右侧边框

    let borderSideClasses = '';

    if (isActive) {
      // 激活态：显示完整四面边框
      borderSideClasses = 'border-r';
    } else {
      // 非激活态：只有最后一项显示右边框，其余项隐藏右边框靠后一项的左边框补齐
      // 修改点：hover 时也需要显示右边框以达成“完整”视觉
      borderSideClasses = isLast ? 'border-r' : 'border-r-0 hover:border-r';
    }

    // 3 & 4. 显示标注显示的边框 border-l 或者 border-r
    // 5. 直接返回最终确定的边框的 className 结果

    // 修改点：统一使用负边距向左偏移，配合 z-index 覆盖，实现无缝切换
    const gapFix = isFirst ? '' : '-ml-[1px]';

    return `${base} ${colors} ${borderSideClasses} ${gapFix}`.trim();
  }, [isActive, isFirst, isLast]);

  return (
    <button
      onClick={onClick}
      disabled={!hasContent}
      className={cn(
        'px-4 py-2 text-sm cursor-pointer',
        // 注意：原有的部分硬编码 border 颜色可能会冲突，建议由 borderClasses 统一接管
        borderClasses,
        !hasContent && 'opacity-40 cursor-not-allowed',
      )}
    >
      {label}
    </button>
  );
}
