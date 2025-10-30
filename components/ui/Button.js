import { forwardRef } from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { getIcon } from '../IconMap';

const StyledLinkButton = forwardRef(({
  href,
  children,
  className,
  ...props
}, ref) => {
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    width: '100%',
    padding: '1rem 1.5rem',
    borderRadius: '0.75rem',
    border: '1px solid #e5e7eb',
    backgroundColor: '#ffffff',
    fontSize: '0.9375rem',
    fontWeight: '500',
    letterSpacing: '0.01em',
    color: '#1f2937',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    margin: '0.5rem 0',
  };

  const hoverStyle = {
    borderColor: '#d1d5db',
    backgroundColor: '#f8fafc',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    transform: 'translateY(-2px)',
    color: '#111827',
  };

  return (
    <a
      ref={ref}
      href={href}
      style={buttonStyle}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, hoverStyle);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, buttonStyle);
      }}
      className={className}
      {...props}
    >
      {/* Content */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flex: 1, minWidth: 0 }}>
        {typeof children === 'object' && children.icon ? (
          <>
            {/* Icon */}
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '1.25rem',
                height: '1.25rem',
                flexShrink: 0,
                opacity: 0.6,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.6';
              }}
            >
              {(() => {
                const Icon = getIcon(children.icon);
                if (Icon) {
                  return <Icon size={18} color="#6b7280" />;
                }
                if (typeof children.icon === 'string' && children.icon.startsWith('/')) {
                  return (
                    <img
                      src={children.icon}
                      alt=""
                      style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.6 }}
                    />
                  );
                }
                return null;
              })()}
            </span>

            {/* Text */}
            <span
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontWeight: '500',
                fontSize: '0.9375rem',
                color: '#374151',
              }}
            >
              {children.text || children.title}
            </span>
          </>
        ) : (
          <span>{children}</span>
        )}
      </div>

      {/* Arrow Icon */}
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '1.25rem',
          height: '1.25rem',
          flexShrink: 0,
          color: '#9ca3af',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#374151';
          e.currentTarget.style.transform = 'translate(2px, -2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#9ca3af';
          e.currentTarget.style.transform = 'translate(0, 0)';
        }}
      >
        <HiArrowUpRight size={16} />
      </span>
    </a>
  );
});

StyledLinkButton.displayName = 'StyledLinkButton';

export { StyledLinkButton };
