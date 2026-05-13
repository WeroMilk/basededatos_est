export function SkeletonCard() {
  return (
    <div 
      className="rounded-2xl p-4 md:p-5"
      style={{
        background: 'var(--sec-surface)',
        border: '1px solid var(--sec-border)',
      }}
    >
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl animate-shimmer flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="h-5 rounded-lg animate-shimmer w-3/4 mb-2" />
          <div className="h-4 rounded-md animate-shimmer w-1/2 mb-2" />
          <div className="h-3 rounded-md animate-shimmer w-2/3" />
        </div>
        <div className="h-8 rounded-lg animate-shimmer w-32 flex-shrink-0" />
      </div>
    </div>
  );
}

export function SkeletonHero() {
  return (
    <div 
      className="px-4 md:px-6 pb-8 pt-8 md:pt-12"
      style={{
        background: 'linear-gradient(135deg, var(--sec-primary) 0%, var(--sec-primary-dark) 100%)',
        borderRadius: '0 0 24px 24px',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="h-4 rounded-md animate-shimmer max-w-md mx-auto mb-4" style={{ background: 'rgba(255,255,255,0.08)' }} />
          <div className="h-16 rounded-xl animate-shimmer w-32 mx-auto mb-2" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div className="h-4 rounded-md animate-shimmer w-48 mx-auto" style={{ background: 'rgba(255,255,255,0.08)' }} />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="h-7 rounded-lg animate-shimmer w-16 mb-1" style={{ background: 'rgba(255,255,255,0.1)' }} />
              <div className="h-3 rounded-md animate-shimmer w-24" style={{ background: 'rgba(255,255,255,0.06)' }} />
            </div>
          ))}
        </div>
        <div className="max-w-xl mx-auto">
          <div className="h-12 rounded-xl animate-shimmer w-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
        </div>
      </div>
    </div>
  );
}

export default function SkeletonLoadingList() {
  return (
    <div className="flex flex-col gap-3 px-4 md:px-6">
      {[1, 2, 3, 4, 5].map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export function SkeletonList() {
  return (
    <div className="flex flex-col gap-3 px-4 md:px-6">
      {[1, 2, 3, 4, 5].map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
