// Extracted JavaScript from metialpha
// Sample data for the application
const sampleData = {
    clients: [
        { id: "CL-1001", name: "John Smith", email: "john.smith@email.com", phone: "(555) 123-4567", plan: "Residential Plus", status: "active", joinDate: "2023-03-15", monthlyBill: "$49.99" },
        { id: "CL-1002", name: "Acme Corp", email: "it@acmecorp.com", phone: "(555) 987-6543", plan: "Business Premium", status: "active", joinDate: "2022-11-08", monthlyBill: "$199.99" },
        { id: "CL-1003", name: "Sarah Johnson", email: "sarahj@email.com", phone: "(555) 456-7890", plan: "Residential Basic", status: "pending", joinDate: "2023-05-22", monthlyBill: "$29.99" },
        { id: "CL-1004", name: "Robert Williams", email: "rwilliams@email.com", phone: "(555) 321-0987", plan: "Business Standard", status: "active", joinDate: "2023-01-30", monthlyBill: "$99.99" },
        { id: "CL-1005", name: "Tech Solutions LLC", email: "billing@techsolutions.com", phone: "(555) 654-3210", plan: "Business Premium", status: "suspended", joinDate: "2022-09-14", monthlyBill: "$199.99" },
        { id: "CL-1006", name: "Emily Davis", email: "emily.davis@email.com", phone: "(555) 789-0123", plan: "Residential Plus", status: "active", joinDate: "2023-04-10", monthlyBill: "$49.99" },
        { id: "CL-1007", name: "Global Imports Inc", email: "admin@globalimports.com", phone: "(555) 234-5678", plan: "Business Standard", status: "active", joinDate: "2022-12-05", monthlyBill: "$99.99" },
        { id: "CL-1008", name: "Michael Brown", email: "m.brown@email.com", phone: "(555) 890-1234", plan: "Residential Basic", status: "active", joinDate: "2023-06-18", monthlyBill: "$29.99" }
    ],
    tickets: [
        { id: "TKT-5001", client: "John Smith", subject: "Slow internet speed in evenings", category: "Technical", priority: "medium", status: "open", created: "2023-07-10" },
        { id: "TKT-5002", client: "Acme Corp", subject: "Billing discrepancy on last invoice", category: "Billing", priority: "low", status: "closed", created: "2023-07-08" },
        { id: "TKT-5003", client: "Sarah Johnson", subject: "Service outage - no connectivity", category: "Outage", priority: "high", status: "open", created: "2023-07-11" },
        { id: "TKT-5004", client: "Robert Williams", subject: "Request to upgrade service plan", category: "Service", priority: "low", status: "open", created: "2023-07-09" },
        { id: "TKT-5005", client: "Emily Davis", subject: "Router replacement needed", category: "Technical", priority: "medium", status: "closed", created: "2023-07-05" },
        { id: "TKT-5006", client: "Global Imports Inc", subject: "Critical outage affecting operations", category: "Outage", priority: "urgent", status: "open", created: "2023-07-11" }
    ],
    invoices: [
        { id: "INV-3001", client: "John Smith", amount: "$49.99", dueDate: "2023-07-25", status: "unpaid" },
        { id: "INV-3002", client: "Acme Corp", amount: "$199.99", dueDate: "2023-07-20", status: "paid" },
        { id: "INV-3003", client: "Sarah Johnson", amount: "$29.99", dueDate: "2023-07-30", status: "unpaid" },
        { id: "INV-3004", client: "Robert Williams", amount: "$99.99", dueDate: "2023-07-22", status: "paid" },
        { id: "INV-3005", client: "Emily Davis", amount: "$49.99", dueDate: "2023-07-28", status: "unpaid" },
        { id: "INV-3006", client: "Global Imports Inc", amount: "$99.99", dueDate: "2023-07-18", status: "paid" }
    ],
    payments: [
        { id: "PAY-4001", client: "Acme Corp", amount: "$199.99", date: "2023-07-15", method: "Credit Card", invoice: "INV-3002" },
        { id: "PAY-4002", client: "Robert Williams", amount: "$99.99", date: "2023-07-18", method: "Bank Transfer", invoice: "INV-3004" },
        { id: "PAY-4003", client: "Global Imports Inc", amount: "$99.99", date: "2023-07-14", method: "Credit Card", invoice: "INV-3006" },
        { id: "PAY-4004", client: "Michael Brown", amount: "$29.99", date: "2023-07-10", method: "PayPal", invoice: "INV-3007" }
    ],
    services: [
        { name: "Residential Basic", speed: "50 Mbps", dataCap: "1 TB", price: "$29.99", clients: 450 },
        { name: "Residential Plus", speed: "200 Mbps", dataCap: "Unlimited", price: "$49.99", clients: 380 },
        { name: "Business Standard", speed: "500 Mbps", dataCap: "Unlimited", price: "$99.99", clients: 285 },
        { name: "Business Premium", speed: "1 Gbps", dataCap: "Unlimited", price: "$199.99", clients: 112 }
    ],
    networkIssues: [
        { id: "NET-6001", location: "Downtown District", description: "Fiber cut during construction", affected: 32, severity: "High", reported: "2023-07-11 09:30", eta: "2023-07-11 15:00" },
        { id: "NET-6002", location: "North Tower", description: "Hardware failure in primary router", affected: 12, severity: "Medium", reported: "2023-07-10 14:15", eta: "2023-07-11 12:00" },
        { id: "NET-6003", location: "West Suburbs", description: "Power outage at relay station", affected: 3, severity: "Low", reported: "2023-07-11 07:45", eta: "2023-07-11 10:30" }
    ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const currentDate = new Date();
    const currentDateEl = document.getElementById('currentDate');
    if (currentDateEl) {
        currentDateEl.textContent = currentDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Initialize charts
    if (typeof Chart !== 'undefined') {
        initCharts();
    }

    // Populate tables with sample data
    populateTables();

    // Setup event listeners
    setupEventListeners();

    // Initialize sidebar navigation
    initNavigation();
});

function initCharts() {
    const revenueEl = document.getElementById('revenueChart');
    if (revenueEl) {
        const revenueCtx = revenueEl.getContext('2d');
        new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Monthly Revenue ($)',
                    data: [38500, 40200, 39800, 41500, 43200, 42580],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: true } },
                scales: { y: { beginAtZero: false, ticks: { callback: function(value) { return '$' + value.toLocaleString(); } } } }
            }
        });
    }

    const packagesEl = document.getElementById('packagesChart');
    if (packagesEl) {
        const packagesCtx = packagesEl.getContext('2d');
        new Chart(packagesCtx, {
            type: 'doughnut',
            data: {
                labels: ['Residential Basic', 'Residential Plus', 'Business Standard', 'Business Premium'],
                datasets: [{
                    data: [450, 380, 285, 112],
                    backgroundColor: ['rgba(52, 152, 219, 0.8)', 'rgba(39, 174, 96, 0.8)', 'rgba(155, 89, 182, 0.8)', 'rgba(243, 156, 18, 0.8)'],
                    borderWidth: 1
                }]
            },
            options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
        });
    }
}

function populateTables() {
    // Populate recent clients table
    const recentClientsBody = document.querySelector('#recentClientsTable tbody');
    if (recentClientsBody) {
        recentClientsBody.innerHTML = '';
        sampleData.clients.slice(0, 5).forEach(client => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${client.id}</td>
                <td>${client.name}</td>
                <td>${client.plan}</td>
                <td><span class="status-badge status-${client.status}">${client.status.charAt(0).toUpperCase() + client.status.slice(1)}</span></td>
                <td>${client.monthlyBill}</td>
                <td class="action-buttons">
                    <button class="btn btn-outline btn-sm view-client" data-id="${client.id}">View</button>
                    <button class="btn btn-primary btn-sm edit-client" data-id="${client.id}">Edit</button>
                </td>
            `;
            recentClientsBody.appendChild(row);
        });
    }

    // Populate recent tickets table
    const recentTicketsBody = document.querySelector('#recentTicketsTable tbody');
    if (recentTicketsBody) {
        recentTicketsBody.innerHTML = '';
        sampleData.tickets.slice(0, 5).forEach(ticket => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${ticket.id}</td>
                <td>${ticket.client}</td>
                <td>${ticket.subject}</td>
                <td><span class="status-badge status-${ticket.priority}">${ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}</span></td>
                <td><span class="status-badge status-${ticket.status}">${ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}</span></td>
                <td>${ticket.created}</td>
                <td class="action-buttons">
                    <button class="btn btn-outline btn-sm view-ticket" data-id="${ticket.id}">View</button>
                </td>
            `;
            recentTicketsBody.appendChild(row);
        });
    }

    // Populate clients table
    const clientsBody = document.querySelector('#clientsTable tbody');
    if (clientsBody) {
        clientsBody.innerHTML = '';
        sampleData.clients.forEach(client => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${client.id}</td>
                <td>${client.name}</td>
                <td>${client.email}</td>
                <td>${client.phone}</td>
                <td>${client.plan}</td>
                <td><span class="status-badge status-${client.status}">${client.status.charAt(0).toUpperCase() + client.status.slice(1)}</span></td>
                <td>${client.joinDate}</td>
                <td class="action-buttons">
                    <button class="btn btn-outline btn-sm view-client" data-id="${client.id}">View</button>
                    <button class="btn btn-primary btn-sm edit-client" data-id="${client.id}">Edit</button>
                </td>
            `;
            clientsBody.appendChild(row);
        });
    }

    // Populate services table
    const servicesBody = document.querySelector('#servicesTable tbody');
    if (servicesBody) {
        servicesBody.innerHTML = '';
        sampleData.services.forEach(service => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${service.name}</td>
                <td>${service.speed}</td>
                <td>${service.dataCap}</td>
                <td>${service.price}</td>
                <td>${service.clients}</td>
                <td class="action-buttons">
                    <button class="btn btn-outline btn-sm">Details</button>
                    <button class="btn btn-primary btn-sm">Edit</button>
                </td>
            `;
            servicesBody.appendChild(row);
        });
    }

    // Populate invoices table
    const invoicesBody = document.querySelector('#invoicesTable tbody');
    if (invoicesBody) {
        invoicesBody.innerHTML = '';
        sampleData.invoices.forEach(invoice => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${invoice.id}</td>
                <td>${invoice.client}</td>
                <td>${invoice.amount}</td>
                <td>${invoice.dueDate}</td>
                <td><span class="status-badge status-${invoice.status}">${invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}</span></td>
                <td class="action-buttons">
                    <button class="btn btn-outline btn-sm">View</button>
                    <button class="btn btn-primary btn-sm ${invoice.status === 'unpaid' ? 'send-reminder' : ''}" ${invoice.status === 'paid' ? 'disabled' : ''}>${invoice.status === 'unpaid' ? 'Remind' : 'Paid'}</button>
                </td>
            `;
            invoicesBody.appendChild(row);
        });
    }

    // Populate payments table
    const paymentsBody = document.querySelector('#paymentsTable tbody');
    if (paymentsBody) {
        paymentsBody.innerHTML = '';
        sampleData.payments.forEach(payment => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${payment.id}</td>
                <td>${payment.client}</td>
                <td>${payment.amount}</td>
                <td>${payment.date}</td>
                <td>${payment.method}</td>
                <td>${payment.invoice}</td>
            `;
            paymentsBody.appendChild(row);
        });
    }

    // Populate overdue table
    const overdueBody = document.querySelector('#overdueTable tbody');
    if (overdueBody) {
        overdueBody.innerHTML = '';
        const overdueInvoices = sampleData.invoices.filter(inv => inv.status === 'unpaid');
        overdueInvoices.forEach(invoice => {
            const dueDate = new Date(invoice.dueDate);
            const today = new Date();
            const daysOverdue = Math.floor((today - dueDate) / (1000 * 60 * 60 * 24));

            if (daysOverdue > 0) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${invoice.client}</td>
                    <td>${invoice.id}</td>
                    <td>${invoice.amount}</td>
                    <td>${daysOverdue} days</td>
                    <td>${daysOverdue > 7 ? '1 week ago' : 'Yesterday'}</td>
                    <td class="action-buttons">
                        <button class="btn btn-outline btn-sm">Contact</button>
                        <button class="btn btn-danger btn-sm">Flag</button>
                    </td>
                `;
                overdueBody.appendChild(row);
            }
        });
    }

    // Populate tickets table
    const ticketsBody = document.querySelector('#ticketsTable tbody');
    if (ticketsBody) {
        ticketsBody.innerHTML = '';
        sampleData.tickets.forEach(ticket => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${ticket.id}</td>
                <td>${ticket.subject}</td>
                <td>${ticket.client}</td>
                <td>${ticket.category}</td>
                <td><span class="status-badge status-${ticket.priority}">${ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}</span></td>
                <td><span class="status-badge status-${ticket.status}">${ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}</span></td>
                <td>${ticket.created}</td>
                <td class="action-buttons">
                    <button class="btn btn-outline btn-sm view-ticket" data-id="${ticket.id}">View</button>
                    <button class="btn btn-primary btn-sm">Assign</button>
                </td>
            `;
            ticketsBody.appendChild(row);
        });
    }

    // Populate network issues table
    const networkIssuesBody = document.querySelector('#networkIssuesTable tbody');
    if (networkIssuesBody) {
        networkIssuesBody.innerHTML = '';
        sampleData.networkIssues.forEach(issue => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${issue.id}</td>
                <td>${issue.location}</td>
                <td>${issue.description}</td>
                <td>${issue.affected} clients</td>
                <td><span class="status-badge status-${issue.severity.toLowerCase()}">${issue.severity}</span></td>
                <td>${issue.reported}</td>
                <td>${issue.eta}</td>
                <td class="action-buttons">
                    <button class="btn btn-outline btn-sm">Update</button>
                    <button class="btn btn-primary btn-sm">Resolve</button>
                </td>
            `;
            networkIssuesBody.appendChild(row);
        });
    }

    // Populate client dropdown in create ticket modal
    const ticketClientSelect = document.getElementById('ticketClient');
    if (ticketClientSelect) {
        ticketClientSelect.innerHTML = '<option value="">Select a client</option>';
        sampleData.clients.forEach(client => {
            const option = document.createElement('option');
            option.value = client.id;
            option.textContent = `${client.name} (${client.id})`;
            ticketClientSelect.appendChild(option);
        });
    }
}

function setupEventListeners() {
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const sidebar = document.getElementById('sidebar');
            if (sidebar) sidebar.classList.toggle('open');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        const sidebar = document.getElementById('sidebar');
        const menuToggleEl = document.getElementById('menuToggle');

        if (window.innerWidth <= 992 && sidebar && menuToggleEl &&
            !sidebar.contains(event.target) && !menuToggleEl.contains(event.target) && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });

    const addClientBtn = document.getElementById('addClientBtn');
    const addClientBtn2 = document.getElementById('addClientBtn2');
    if (addClientBtn) addClientBtn.addEventListener('click', openAddClientModal);
    if (addClientBtn2) addClientBtn2.addEventListener('click', openAddClientModal);

    const createTicketBtn = document.getElementById('createTicketBtn');
    if (createTicketBtn) createTicketBtn.addEventListener('click', openCreateTicketModal);

    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', closeAllModals);
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeAllModals();
            }
        });
    });

    const addClientForm = document.getElementById('addClientForm');
    if (addClientForm) {
        addClientForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Client added successfully!');
            closeAllModals();
            setTimeout(() => { alert('Client list refreshed with new client.'); }, 500);
        });
    }

    const createTicketForm = document.getElementById('createTicketForm');
    if (createTicketForm) {
        createTicketForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Support ticket created successfully!');
            closeAllModals();
            setTimeout(() => { alert('Tickets list refreshed with new ticket.'); }, 500);
        });
    }

    const clientSearch = document.getElementById('clientSearch');
    if (clientSearch) {
        clientSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('#clientsTable tbody tr');
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }

    // Tab switching
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const parent = this.closest('.tabs');
            if (parent) {
                parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                const container = this.closest('.page-content');
                if (container) {
                    container.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                    const target = container.querySelector(`#${tabId}`);
                    if (target) target.classList.add('active');
                }
            }
        });
    });

    const generalSettingsForm = document.getElementById('generalSettingsForm');
    if (generalSettingsForm) {
        generalSettingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Settings saved successfully!');
        });
    }

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-client')) {
            const clientId = e.target.getAttribute('data-id');
            alert(`Viewing client details for: ${clientId}`);
        }

        if (e.target.classList.contains('edit-client')) {
            const clientId = e.target.getAttribute('data-id');
            alert(`Editing client: ${clientId}`);
        }

        if (e.target.classList.contains('view-ticket')) {
            const ticketId = e.target.getAttribute('data-id');
            alert(`Viewing ticket details for: ${ticketId}`);
        }

        if (e.target.classList.contains('send-reminder')) {
            alert('Payment reminder sent to client!');
        }
    });
}

function initNavigation() {
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.sidebar-menu a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
            const pageId = this.getAttribute('data-page');
            if (!pageId) return;
            document.querySelectorAll('.page-content').forEach(page => page.classList.remove('active'));
            const target = document.getElementById(pageId);
            if (target) target.classList.add('active');
            const pageTitle = document.querySelector(`#${pageId} .page-title h1`);
            if (pageTitle) document.title = `${pageTitle.textContent} - ISP Connect`;
            if (window.innerWidth <= 992) {
                const sidebar = document.getElementById('sidebar');
                if (sidebar) sidebar.classList.remove('open');
            }
        });
    });
}

function openAddClientModal() { const modal = document.getElementById('addClientModal'); if (modal) modal.style.display = 'flex'; }
function openCreateTicketModal() { const modal = document.getElementById('createTicketModal'); if (modal) modal.style.display = 'flex'; }
function closeAllModals() { document.querySelectorAll('.modal').forEach(modal => { modal.style.display = 'none'; }); }

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 992) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.remove('open');
    }
});

/* End of extracted JS */
