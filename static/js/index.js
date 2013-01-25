exports.documentReady = function(hook, context)
{
  $("#histAuthorsCheckbox").click(histAuthorClick);
}

exports.postAceInit = function(hook, context)
{
  var data = clientVars.collab_client_vars.historicalAuthorData;
  
  if(Object.keys(data).length == 0)
  {
	$('#histAuthorsCheckbox').css('display', 'none');
	$('#histAuthorsCheckboxLabel').css('display', 'none');
	$('#noHistAuthors').css('display', 'inline');
  }

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
  $('#histUsers').toggle();
}
