window.ThemeManager = {
    currentTheme: 'light',
    
    init: function() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('data-theme', this.currentTheme);
        this.updateThemeIcon();
        
        document.querySelector('#theme-toggle')?.addEventListener('click', () => this.toggle());
    },
    
    toggle: function() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        this.updateThemeIcon();
    },
    
    updateThemeIcon: function() {
        const icon = document.querySelector('#theme-toggle');
        if (icon) {
            icon.className = this.currentTheme === 'light' ? 'fa-regular fa-sun' : 'fa-regular fa-moon';
        }
    }
};