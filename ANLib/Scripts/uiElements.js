let currentNotificationTimeout;
let msgTimeout = window.setTimeout(function(){}, 0);

function ShowNotification(msg, time)
{
    if(document.getElementById('ANLib_Notify') == null)
    {
        const msgContainer = document.createElement('div');
        const msgText = document.createElement('p');

        msgContainer.className = 'msgNofity';
        msgContainer.id = 'ANLib_Notify';
        msgContainer.style.animation = `msgNotify_in 512ms forwards`;
        msgText.className = 'fc_dark fw_400';
        msgText.innerHTML = msg;

        msgContainer.addEventListener('click', function()
        {
            msgContainer.style.animation = `msgNotify_out 512ms forwards`;
            msgContainer.style.pointerEvents = 'none';
            msgTimeout = setTimeout(() => {
                msgContainer.remove();
            }, 513);
        })

        msgContainer.appendChild(msgText);
        document.body.appendChild(msgContainer);

        currentNotificationTimeout = setTimeout(() => {
            msgContainer.style.animation = `msgNotify_out 512ms forwards`;
            msgContainer.style.pointerEvents = 'none';
            msgTimeout = setTimeout(() => {
                msgContainer.remove();
            }, 513);
        }, Number(time) + Number(1) );
    }
    else{
        document.getElementById('ANLib_Notify').remove();
        clearTimeout(currentNotificationTimeout);
        clearTimeout(msgTimeout);
        ShowNotification(msg, time);
    }
}

function PlayButtonAnimation(elementId)
{
    const buttonId = document.getElementById(elementId);

    buttonId.style.animation = "";
    setTimeout(() => {
        buttonId.style.animation = "buttonHappyAdaptive 0.333s forwards";
    }, 4);
}
