Emberfest.Ticket = DS.Model.extend({
    userId: DS.belongsTo('user'),
    ticketHolder: DS.attr('string'),
    ordernumber: DS.attr('string'),
    ticketType: DS.belongsTo('ticketType'),
    ticketId: DS.attr('string')
});