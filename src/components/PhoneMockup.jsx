export default function PhoneMockup({ image, alt = 'iPhone', className = '', compact = false, priority = false }) {
  return (
    <div className={`phone-shot ${compact ? 'phone-shot--compact' : ''} ${className}`}>
      <div className="phone-shot__frame">
        <img src={image} alt={alt} className="phone-shot__image" loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" />
      </div>
    </div>
  )
}
