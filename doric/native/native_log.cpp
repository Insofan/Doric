#include <QDebug>

#include "native_log.h"

void NativeLog::function(QString level, QString content) {
    if (level == 'w') {
        qWarning() << content;
    } else if (level == 'd') {
        qDebug() << content;
    } else if (level == 'e') {
        qCritical() << content;
    }
}
