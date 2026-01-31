import { forwardRef } from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { getIcon } from '../IconMap';

const StyledLinkButton = forwardRef(({
  href,
  children,
  className,
  tooltip,
  ...props
}, ref) => {
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    width: '100%',
    padding: window.innerWidth <= 768 ? '1.125rem 1.5rem' : '1rem 1.5rem',
    borderRadius: '0.75rem',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-surface)',
    fontSize: window.innerWidth <= 768 ? '1rem' : '0.9375rem',
    fontWeight: '400',
    letterSpacing: '0.01em',
    color: 'var(--color-text)',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    margin: window.innerWidth <= 768 ? '0.75rem 0' : '0.625rem 0',
    touchAction: 'manipulation',
  };

  const hoverStyle = {
    borderColor: 'var(--color-accent)',
    backgroundColor: 'var(--color-surface-muted)',
    color: 'var(--color-text)',
  };

  return (
    <a
      ref={ref}
      href={href}
      style={buttonStyle}
      title={tooltip}
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
                  return <Icon size={18} color="var(--color-muted)" />;
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
                fontWeight: '600',
                fontSize: '0.9375rem',
                color: 'var(--color-text)',
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
          color: 'var(--color-muted)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--color-text)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--color-muted)';
        }}
      >
        <HiArrowUpRight size={16} />
      </span>
    </a>
  );
});

StyledLinkButton.displayName = 'StyledLinkButton';

export { StyledLinkButton };
