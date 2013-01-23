exports.documentReady = function(hook, context)
{
  $("#histAuthorsCheckbox").click(histAuthorClick);
}

exports.postAceInit = function(hook, context)
{
  var data = clientVars.collab_client_vars.historicalAuthorData;

  for(var user in data)
  {
    var html = '<tr><td style="height: 26px;" class="usertdswatch"><div class="swatch" style="background:' + data[user].colorId + '">&nbsp;</div></td>';
    html += '<td style="height: 26px;" class="usertdname"';

    if(!data[user].name || data[user].name.length == 0)
      html += ' data-l10n-id="pad.userlist.unnamed">' + _("pad.userlist.unnamed");
    else
      html += '>' + data[user].name;
    html += '</td></tr>'
    
    $('#histUsers').append(html);
  }
}

function histAuthorClick()
{
  if($('#histUsers').css('display') == 'table')
    $('#histUsers').css('display', 'none');
  else
    $('#histUsers').css('display', 'table');
}
